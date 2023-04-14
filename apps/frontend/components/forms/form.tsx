import { FunctionComponent, ReactNode } from 'react'
import { FormProvider, UseFormReturn } from 'react-hook-form'

interface FormProps {
  context: UseFormReturn
  children?: ReactNode | ReactNode[]
  onSubmit: (data: any) => void
  id?: string
  className?: string
}

/**
 * # Form
 *
 * Form component to handle the input
 * use the hook form and automatically submitted
 *
 * @returns JSX.Element
 */
const Form: FunctionComponent<FormProps> = ({
  context,
  onSubmit,
  children,
  id,
  className,
}): JSX.Element => {
  const methods = context
  const { handleSubmit } = context

  return (
    <FormProvider {...methods}>
      <form
        id={id}
        className={` ${className}`}
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  )
}

export default Form
