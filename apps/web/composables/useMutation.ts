interface UseMutationReturn<D, E> {
  pending: Ref<boolean>
  data: Ref<D | any>
  error: Ref<E | any>
  mutate: (args?: any) => void
}

interface UseMutationOptions {
  onPending?: () => void
  onError?: (error?: any) => void
  onSuccess?: (data?: any) => void
}

/**
 * # useMutation
 *
 * helper to manage and mutate data with modern way
 * and help the flow of state
 *
 * @param mutateFunc the function to mutate passed as args
 * @param options options when teh mutatetion
 * @returns UseMutationReturn
 */
export default function useMutation<D, E>(
  mutateFunc: (...args: any) => void,
  options?: UseMutationOptions
): UseMutationReturn<D, E> {
  const pending = ref<boolean>(false)
  const error = ref<E | any>()
  const data = ref<D | any>()

  // wrap all calling function
  // into a single call from a mutate
  const mutating = async (args?: any) => {
    try {
      // start pending state
      pending.value = true

      // call the mutation function and return the value data
      const res = await mutateFunc(args)

      // success state
      pending.value = false
      data.value = res
      options?.onSuccess && options.onSuccess(res)
    } catch (err) {
      // error state
      pending.value = false
      options?.onError && options.onError(err)
      error.value = err
    }
  }

  return { data, error, pending, mutate: mutating }
}
