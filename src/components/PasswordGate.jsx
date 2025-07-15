'use client'
import { useState } from 'react'

export default function PasswordGate({ children, correct = 'sorghum123' }) {
  const [unlocked, setUnlocked] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const pw = e.target.elements.pw.value
    if (pw === correct) {
      setUnlocked(true) // form will disappear next render
    } else {
      alert('Sorry, try again!')
    }
  }

  if (unlocked) return <>{children}</>

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}
    >
      <label>
        Password:
        <input
          name="pw"
          type="password"
          style={{ marginLeft: '.5rem', borderBottom: '1px solid #ccc' }}
        />
      </label>
      <button type="submit" style={{ marginTop: '1.5rem' }}>
        View Quiz Answers
      </button>
    </form>
  )
}
