import { useState } from 'react'

export default function FaqList({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="faq-frame">
      {items.map((item, i) => (
        <div className={open === i ? 'faq-item open' : 'faq-item'} key={item.q}>
          <button type="button" onClick={() => setOpen(open === i ? -1 : i)}>
            {item.q}
            <span>{open === i ? '–' : '+'}</span>
          </button>
          <div className="answer">{item.a}</div>
        </div>
      ))}
    </div>
  )
}
