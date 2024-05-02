import { bdrService } from '@/services/bdr.services'
import { useMutation, useQueryClient } from '@tanstack/react-query'



export function useDeleteBdr(itemId: string) {
	const queryClient = useQueryClient()

	const { mutate: deleteBdr, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete Bdr', itemId],
		mutationFn: () => bdrService.deleteBdr(itemId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['Bdr']
			})
		}
	})

	return { deleteBdr, isDeletePending }
}
