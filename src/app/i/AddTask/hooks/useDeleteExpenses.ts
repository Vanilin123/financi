import { useMutation, useQueryClient } from '@tanstack/react-query'

import { expensesService } from '@/services/expenses.services'

export function useDeleteExpenses(itemId: string) {
	const queryClient = useQueryClient()

	const { mutate: deleteExpenses, isPending: isDeletePending } = useMutation({
		mutationKey: ['delete expenses', itemId],
		mutationFn: () => expensesService.deleteExpenses(itemId),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['expenses']
			})
		}
	})

	return { deleteExpenses, isDeletePending }
}
