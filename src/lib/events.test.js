import { describe, it, expect, vi } from 'vitest'

vi.mock('./supabase', () => ({
  supabase: {
    from: () => ({
      select: () => ({ order: () => ({ data: [{ id: 1, title: 'mock' }], error: null }) })
    })
  }
}))

import { fetchEvents } from './events'

describe('fetchEvents', () => {
  it('returns events from supabase', async () => {
    const res = await fetchEvents()
    expect(Array.isArray(res)).toBe(true)
    expect(res[0].title).toBe('mock')
  })
})
