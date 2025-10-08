import React from 'react'
import { describe, it, expect } from 'vitest'
import { renderToString } from 'react-dom/server'
import Projects from './Projects'

describe('Projects page', () => {
  it('renders heading and sample project titles', () => {
    const html = renderToString(<Projects />)
    expect(typeof html).toBe('string')
    expect(html).toContain('Projects')
    expect(html).toContain('Campus Map App')
    expect(html).toContain('StudyBuddy Mobile')
  })
})
