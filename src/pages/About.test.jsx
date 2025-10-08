import React from 'react'
import { describe, it, expect } from 'vitest'
import { renderToString } from 'react-dom/server'
import About from './About'

describe('About page', () => {
  it('renders heading and leadership section', () => {
    const html = renderToString(<About />)
    expect(typeof html).toBe('string')
    expect(html).toContain('About the Club')
    // leadership names from fixture
    expect(html).toContain('Alex Johnson')
    expect(html).toContain('Priya Singh')
    expect(html).toContain('Marcus Lee')
  })
})
