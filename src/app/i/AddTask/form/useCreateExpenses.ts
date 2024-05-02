import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { TypeExpenses } from '@/types/expenses.types'

import { expensesService } from '@/services/expenses.services'

export function useCreateExpenses() {
	const queryClient = useQueryClient()

	const { mutate: createExpenses, isPending } = useMutation({
		mutationKey: ['create expenses'],
		mutationFn: (data: TypeExpenses) =>
			expensesService.createExpenses(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['expenses']
			})
		}
	})

	return {
		createExpenses,
		isPending
	}
}
