import { FunctionComponent, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import styles from '@styles/components/forms/input.module.scss'

interface BaseInputProps {
  label?: string
  name: string
  placeholder?: string
  value?: any
  preIcon?: string
  className?: string
}
interface TextInputProps extends BaseInputProps {}
interface TextAreaInputProps extends BaseInputProps {}
interface HiddenInputProps extends BaseInputProps {}

/**
 * # TextInput
 *
 * the input for text
 * use for almost
 *
 * @returns JSX.Element
 */
const ContactTextInput: FunctionComponent<TextInputProps> = ({
  name,
  placeholder,
  value,
}): JSX.Element => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext()

  useEffect(() => {
    setValue(name, value)
  }, [value])

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        {...register(name)}
        id={`${name}-input`}
        placeholder={placeholder}
        className={styles.input}
        value={value}
      />

      {errors[name]?.message && (
        <span className={styles.message}>
          {errors[name]?.message?.toString()}
        </span>
      )}
    </div>
  )
}

/**
 * # TextInput
 * the text input for small style type
 * used in normal form and other things
 * @returns JSX.Element
 */
const TextInput: FunctionComponent<TextInputProps> = ({
  name,
  placeholder,
  value,
  label,
  preIcon,
  className,
}): JSX.Element => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext()

  useEffect(() => {
    setValue(name, value)
  }, [value])

  return (
    <div className="flex flex-col w-full">
      {label && <label htmlFor={`${name}-input`} className=""></label>}
      <div className="flex w-full h-12 bg-gray-100 rounded-2xl ring ring-transparent focus-within:ring-2 focus-within:ring-black px-5 transition-all duration-300">
        {preIcon && <i className={`${preIcon}`}></i>}
        <input
          type="text"
          {...register(name)}
          id={`${name}-input`}
          placeholder={placeholder}
          className="flex h-full flex-1 bg-transparent outline-transparent border-transparent ring-transparent focus:ring-transparent focus:border-transparent focus:outline-transparent"
        />
      </div>

      {errors[name]?.message && (
        <span className="text-red-600 ml-2 mt-3 text-[15px]">
          {errors[name]?.message?.toString()}
        </span>
      )}
    </div>
  )
}

/**
 * # TextAreaInput
 *
 * the input for long string type
 * use most like an text area element
 *
 * @returns JSX.Element
 */
const ContactTextAreaInput: FunctionComponent<TextAreaInputProps> = ({
  name,
  placeholder,
  value,
}): JSX.Element => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext()

  useEffect(() => {
    setValue(name, value)
  }, [value])

  return (
    <div className={styles.wrapper}>
      <textarea
        {...register(name)}
        id={`${name}-input`}
        placeholder={placeholder}
        className={styles.input}
        value={value}
      ></textarea>

      {errors[name]?.message && (
        <span className={styles.message}>
          {errors[name]?.message?.toString()}
        </span>
      )}
    </div>
  )
}

/**
 * # HiddenInput
 *
 * the input for
 * hidden value
 *
 * @returns JSX.Element
 */
const HiddenInput: FunctionComponent<HiddenInputProps> = ({
  name,
  value,
}): JSX.Element => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext()

  useEffect(() => {
    setValue(name, value)
  }, [value])

  return (
    <div className={styles.wrapper}>
      <input
        {...register(name)}
        id={`${name}-input`}
        className={styles.hidden}
        value={value}
      />
    </div>
  )
}

export { ContactTextInput, ContactTextAreaInput, HiddenInput, TextInput }
