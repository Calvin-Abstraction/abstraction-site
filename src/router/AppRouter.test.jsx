import React from 'react'
import { describe, it, expect } from 'vitest'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home'

describe('AppRouter (light)', () => {
  it('renders header, home, and footer without requiring browser DOM', () => {
    const html = renderToString(
      <MemoryRouter>
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </MemoryRouter>
    )
    expect(typeof html).toBe('string')
    expect(html.length).toBeGreaterThan(0)
  })
})
