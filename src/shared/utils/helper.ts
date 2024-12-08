import dayjs from 'dayjs'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function mergeClass(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseReadableDate(date: string) {
  return dayjs(date).format('MMM, DD YYYY')
}
