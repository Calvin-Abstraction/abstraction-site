import React from 'react'
import { describe, it, expect } from 'vitest'
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

describe('Header component', () => {
  it('renders brand and navigation links', () => {
    const html = renderToString(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    expect(typeof html).toBe('string')
    // brand
    expect(html).toContain('Abstraction')
    expect(html).toContain('Calvin Computer Science')
    // navigation
    expect(html).toContain('Home')
    expect(html).toContain('Projects')
    expect(html).toContain('About')
    expect(html).toContain('Join Us')
    // external CTA
    expect(html).toContain('Calvin Hackathon')
  })
})
