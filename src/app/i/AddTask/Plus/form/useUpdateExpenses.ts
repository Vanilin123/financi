import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { TypeIncome } from '@/types/income.types'

import { incomeService } from '@/services/income.service'

export function useUpdateIncome(key?: string) {
	const queryClient = useQueryClient()

	const { mutate: updateIncome } = useMutation({
		mutationKey: ['update income', key],
		mutationFn: ({ id, data }: { id: string; data: TypeIncome }) =>
			incomeService.updateIncome(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['income']
			})
		}
	})

	return { updateIncome }
}
