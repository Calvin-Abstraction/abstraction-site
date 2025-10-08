import { supabase } from './supabase'

export async function fetchEvents() {
  const { data, error } = await supabase.from('events').select('*').order('date', { ascending: true })
  if (error) throw error
  return data
}
