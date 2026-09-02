import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

const REVIEW_LINK =
  'https://search.google.com/local/writereview?placeid=ChIJXXje9p8964URV-AeIIzJ7x0'

const FEEDBACK_ENDPOINT =
  'https://reviewtool.gsmarketingroup.com/api/send-feedback'

const TRACK_ENDPOINT =
  'https://reviewtool.gsmarketingroup.com/api/track-event'

const BUSINESS_EMAIL = 'bellfordplumbing@gmail.com'
const BUSINESS_NAME = 'Bellford Plumbing'
const PLATFORM = 'google'
const MIN_RATING = 4

function normalizeHash(hash) {
  return (hash || '').toLowerCase().split('?')[0]
}

function isReviewHash(hash) {
  const normalized = normalizeHash(hash)
  return normalized === '#reviews' || normalized === '#review'
}

function reviewWidgetUrl() {
  return `${window.location.origin}${window.location.pathname}#reviews`
}

function trackEvent(eventType, extra = {}) {
  const payload = {
    businessEmail: BUSINESS_EMAIL,
    businessName: BUSINESS_NAME,
    platform: PLATFORM,
    eventType,
    timestamp: new Date().toISOString(),
    pageUrl: window.location.href,
    referrer: document.referrer || '',
    reviewLink: REVIEW_LINK,
    widgetUrl: reviewWidgetUrl(),
    ...extra,
  }

  try {
    const body = JSON.stringify(payload)

    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        TRACK_ENDPOINT,
        new Blob([body], { type: 'application/json' }),
      )
      return
    }

    fetch(TRACK_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    }).catch(() => {})
  } catch {
    // Tracking must never block the review flow.
  }
}

export default function ReviewPopup() {
  const initialHashOpen =
    typeof window !== 'undefined' && isReviewHash(window.location.hash)

  const [open, setOpen] = useState(initialHashOpen)
  const [openSource, setOpenSource] = useState(
    initialHashOpen ? 'hash' : 'button',
  )
  const [rating, setRating] = useState(0)
  const [showFeedback, setShowFeedback] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [error, setError] = useState('')
  const [thankYou, setThankYou] = useState(false)
  const [sending, setSending] = useState(false)

  const modalRef = useRef(null)
  const closeRef = useRef(null)
  const lastFocusedRef = useRef(null)
  const previousOverflowRef = useRef('')
  const openTrackedRef = useRef(false)

  function resetState() {
    setRating(0)
    setShowFeedback(false)
    setFeedback('')
    setError('')
    setThankYou(false)
    setSending(false)
  }

  function openModal(source = 'button') {
    resetState()
    lastFocusedRef.current = document.activeElement
    setOpenSource(source)

    if (!isReviewHash(window.location.hash)) {
      window.history.pushState(
        null,
        '',
        `${window.location.pathname}${window.location.search}#reviews`,
      )
    }

    setOpen(true)
  }

  function closeModal() {
    setOpen(false)

    if (isReviewHash(window.location.hash)) {
      window.history.replaceState(
        null,
        '',
        `${window.location.pathname}${window.location.search}`,
      )
    }
  }

  function submitRating() {
    if (!rating) {
      setError('Select a star rating first.')
      return
    }

    setError('')

    if (rating >= MIN_RATING) {
      trackEvent('review_redirect', { rating })
      window.location.href = REVIEW_LINK
      return
    }

    setShowFeedback(true)
  }

  async function submitFeedback() {
    if (!feedback.trim()) {
      setError('Add a few words so we know what to fix.')
      return
    }

    setError('')
    setSending(true)

    try {
      const response = await fetch(FEEDBACK_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName: BUSINESS_NAME,
          businessEmail: BUSINESS_EMAIL,
          customerRating: rating,
          customerFeedback: feedback.trim(),
          platform: PLATFORM,
          timestamp: new Date().toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error('Feedback request failed')
      }

      trackEvent('feedback_submit', { rating })
      setShowFeedback(false)
      setThankYou(true)
    } catch {
      setError("That didn't send. Check your connection and try again.")
    } finally {
      setSending(false)
    }
  }

  useEffect(() => {
    function handleHashChange() {
      if (isReviewHash(window.location.hash)) {
        resetState()
        lastFocusedRef.current = document.activeElement
        setOpenSource('hash')
        setOpen(true)
      } else {
        setOpen(false)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (!open) return undefined

    previousOverflowRef.current = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    if (!openTrackedRef.current) {
      openTrackedRef.current = true
      trackEvent('widget_open', { source: openSource })
    }

    requestAnimationFrame(() => closeRef.current?.focus())

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false)

        if (isReviewHash(window.location.hash)) {
          window.history.replaceState(
            null,
            '',
            `${window.location.pathname}${window.location.search}`,
          )
        }

        return
      }

      if (event.key !== 'Tab' || !modalRef.current) return

      const focusable = Array.from(
        modalRef.current.querySelectorAll(
          'button:not([disabled]), textarea:not([disabled]), input:not([disabled]), [href]',
        ),
      ).filter((element) => element.offsetParent !== null)

      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflowRef.current
      openTrackedRef.current = false

      if (lastFocusedRef.current?.focus) {
        lastFocusedRef.current.focus()
      }
    }
  }, [open, openSource])

  const modal = (
    <div
      className={`review-popup-overlay${open ? ' is-open' : ''}`}
      aria-hidden={!open}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeModal()
      }}
    >
      <div
        className="review-popup"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="review-popup-title"
      >
        <button
          ref={closeRef}
          type="button"
          className="review-popup-close"
          onClick={closeModal}
          aria-label="Close review popup"
        >
          ×
        </button>

        <span className="eyebrow">Your feedback matters</span>
        <h2 id="review-popup-title">Bellford Plumbing</h2>
        <p className="review-popup-subtitle">
          We value your feedback! Please rate our service.
        </p>

        {!showFeedback && !thankYou ? (
          <>
            <div className="review-stars" role="group" aria-label="Rate our service">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  className={star <= rating ? 'is-selected' : ''}
                  aria-label={`${star} star${star === 1 ? '' : 's'}`}
                  aria-pressed={star === rating}
                  onClick={() => {
                    setRating(star)
                    setError('')
                  }}
                >
                  ★
                </button>
              ))}
            </div>

            {error ? (
              <p className="review-popup-error" role="alert">
                {error}
              </p>
            ) : null}

            <button
              type="button"
              className="btn btn-primary review-submit"
              onClick={submitRating}
            >
              Submit review
            </button>
          </>
        ) : null}

        {showFeedback ? (
          <div className="review-feedback">
            <h3>Your feedback</h3>
            <p>
              Tell us what went wrong and how we can improve your experience.
            </p>

            <textarea
              value={feedback}
              onChange={(event) => {
                setFeedback(event.target.value)
                setError('')
              }}
              placeholder="Tell us what went wrong and how we can fix it..."
              aria-label="Private feedback"
            />

            {error ? (
              <p className="review-popup-error" role="alert">
                {error}
              </p>
            ) : null}

            <button
              type="button"
              className="btn btn-primary"
              onClick={submitFeedback}
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Send feedback'}
            </button>
          </div>
        ) : null}

        {thankYou ? (
          <div className="review-thank-you" role="status">
            <span aria-hidden="true">✓</span>
            <h3>Thank you for your feedback!</h3>
            <p>Your comments have been sent privately to Bellford Plumbing.</p>
          </div>
        ) : null}
      </div>
    </div>
  )

  return (
    <>
      <div className="review-popup-trigger">
        <button
          type="button"
          className="btn btn-light"
          onClick={() => openModal('button')}
        >
          Leave Us A Review
        </button>
      </div>

      {typeof document !== 'undefined'
        ? createPortal(modal, document.body)
        : null}
    </>
  )
}
