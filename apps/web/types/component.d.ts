export interface BaseButtonProps {
  class?: string
  type?: 'button' | 'submit'
}

export interface BaseButtonEmits {
  (e: 'click'): void
}
