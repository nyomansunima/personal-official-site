/**
 * # parseDateToRelative
 *
 * Parse the date into the string
 * and readable to relative date
 *
 * @param date Date
 * @returns string
 */
export function parseDateToRelative(date: Date) {
  const now = new Date()
  const parsedDate = new Date(date)
  const timeDiff = now.getTime() - parsedDate.getTime()

  // Convert the time difference to days and weeks
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
  const weeksDiff = Math.floor(daysDiff / 7)

  // Return the appropriate string representation
  if (daysDiff === 1) {
    return 'a day ago'
  } else if (daysDiff > 1 && daysDiff < 7) {
    return `${daysDiff} days ago`
  } else if (weeksDiff === 1) {
    return 'a week ago'
  } else if (weeksDiff > 1) {
    return `${weeksDiff} weeks ago`
  } else {
    return '🔥 new'
  }
}
