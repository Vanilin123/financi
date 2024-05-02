import { incomeService } from '@/services/income.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'



export function useDeleteIncome(itemId: string) {
	const queryClient = useQueryClient()

	const { mutate: deleteIncome, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete income', itemId],
		mutationFn: () => incomeService.deleteIncome(itemId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['income']
			})
		}
	})

	return { deleteIncome, isDeletePending }
}
