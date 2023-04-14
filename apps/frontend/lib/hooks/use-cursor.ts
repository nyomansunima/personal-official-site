import { useQuery, useQueryClient } from '@tanstack/react-query'

interface UseCursorResult {
  reload: () => void
  data: any
}

/**
 * # useCursor
 *
 * hooks for the cursor
 * mainly using to update th cursor when something change in
 * the document or componnets
 *
 * @returns UseCursorResult
 */
const useCursor: () => UseCursorResult = () => {
  // get the client of provider
  const queryClient = useQueryClient()

  return {
    reload: () => {
      queryClient.setQueriesData(['cursor'], 'null')
    },
    data: useQuery<any>(['cursor'], () => null).data ?? null,
  }
}

export default useCursor
