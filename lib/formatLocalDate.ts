export function formatLocalDate(dateString: string, locale: string = 'en-US') {
  const date = new Date(dateString)

  // Add timezone offset to convert UTC to local time
  const offset = date.getTimezoneOffset()
  const localDate = new Date(date.getTime() + offset * 60 * 1000)

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return localDate.toLocaleDateString(locale, options)
}
