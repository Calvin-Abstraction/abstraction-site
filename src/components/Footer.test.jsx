import React from 'react'
import { describe, it, expect } from 'vitest'
import { renderToString } from 'react-dom/server'
import Footer from './Footer'

describe('Footer component', () => {
  it('renders contact info and nav links', () => {
    const html = renderToString(<Footer />)
    expect(typeof html).toBe('string')
    expect(html).toContain('Calvin University CS Club')
    expect(html).toContain('Contact: csclub@calvin.edu')
    expect(html).toContain('Grand Rapids')
    expect(html).toContain('Instagram')
    expect(html).toContain('GitHub')
  })
})
