import { FunctionComponent, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import styles from '@styles/components/forms/input.module.scss'

interface BaseInputProps {
  name: string
  placeholder?: string
  value?: any
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
const TextInput: FunctionComponent<TextInputProps> = ({
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
 * # TextAreaInput
 *
 * the input for long string type
 * use most like an text area element
 *
 * @returns JSX.Element
 */
const TextAreaInput: FunctionComponent<TextAreaInputProps> = ({
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

export { TextInput, TextAreaInput, HiddenInput }
