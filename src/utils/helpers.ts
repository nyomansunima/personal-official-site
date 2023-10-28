import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge the class to combine without
 * conflicts and avoid the bad code structure
 *
 * @param inputs the class input
 * @returns {string}
 */
export function mergeClass(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
