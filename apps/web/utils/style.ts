import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * ## mergeClass
 *
 * merge the class and give the class
 * autority based on the variants
 *
 * @param input the class want to merge
 * @returns {string}
 */
export function mergeClass(...input: ClassValue[]) {
  return twMerge(clsx(input))
}
