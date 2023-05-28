export interface BaseButtonProps {
  class?: string
  type?: 'button' | 'submit'
}

export interface BaseButtonEmits {
  (e: 'click'): void
}

export interface BaseInputProps {
  preIcon?: string
  sufIcon?: string
  name: string
  placeholder?: string
  label?: string
  value?: any
}

export interface BaseInputEmits {
  (e: 'enter', e: any): void
}
