import { useState } from 'react'

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="acc">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <article className={isOpen ? 'acc-item open' : 'acc-item'} key={item.title}>
            <button type="button" className="acc-btn" onClick={() => setOpen(isOpen ? -1 : i)}>
              <span>{item.title}</span>
              <span className="acc-orb" aria-hidden="true">
                {isOpen ? '–' : '+'}
              </span>
            </button>
            {isOpen ? <p className="acc-body">{item.text}</p> : null}
          </article>
        )
      })}
    </div>
  )
}
