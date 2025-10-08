import React from 'react'
import { describe, it, expect } from 'vitest'
import { renderToString } from 'react-dom/server'
import Home from './pages/Home'

describe('Home page', () => {
  it('renders to string without crashing', () => {
    const html = renderToString(<Home />)
    expect(typeof html).toBe('string')
    expect(html.length).toBeGreaterThan(0)
  })
})