import React from 'react'
import { describe, it, expect } from 'vitest'
import { renderToString } from 'react-dom/server'
import Home from './Home'

describe('Home page', () => {
  it('renders upcoming events and event cards', () => {
    const html = renderToString(<Home />)
    expect(typeof html).toBe('string')
    expect(html).toContain('Upcoming Events')
    // sample events: check for one known title
    expect(html).toContain('Intro to React Workshop')
    expect(html).toContain('Robotics Demo Night')
  })
})
