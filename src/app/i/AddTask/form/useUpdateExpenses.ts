import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { TypeExpenses } from '@/types/expenses.types'

import { expensesService } from '@/services/expenses.services'

export function useUpdateExpenses(key?: string) {
	const queryClient = useQueryClient()

	const { mutate: updateExpenses } = useMutation({
		mutationKey: ['update expenses', key],
		mutationFn: ({ id, data }: { id: string; data: TypeExpenses }) =>
			expensesService.updateExpenses(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['expenses']
			})
		}
	})

	return { updateExpenses }
}
