export interface BaseButtonProps {
  link?: string
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
