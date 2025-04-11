import { format } from 'date-fns'

export function formatDateTime(date: string): string {
  const dateObj = new Date(date)
  return format(dateObj, 'MMMM d, yyyy HH:mm')
}

export function formatDate(date: string): string {
  const dateObj = new Date(date)
  return format(dateObj, 'MMMM d, yyyy')
}
