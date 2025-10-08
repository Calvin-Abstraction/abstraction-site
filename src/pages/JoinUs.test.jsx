import React from 'react'
import { describe, it, expect } from 'vitest'
import { renderToString } from 'react-dom/server'
import JoinUs from './JoinUs'

describe('JoinUs page', () => {
  it('renders the join form fields and button', () => {
    const html = renderToString(<JoinUs />)
    expect(typeof html).toBe('string')
    expect(html).toContain('Join Us')
    expect(html).toContain('Name')
    expect(html).toContain('Email')
    expect(html).toContain('Sign Up')
  })
})
