import { useMutation, useQueryClient } from '@tanstack/react-query'

import { incomeService } from '@/services/income.service'
import { TypeIncome } from '@/types/income.types'

export function useCreateIncome() {
	const queryClient = useQueryClient()

	const { mutate: createIncome, isPending } = useMutation({
		mutationKey: ['create income'],
		mutationFn: (data: TypeIncome) =>
			incomeService.createIncome(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['income']
			})
		}
	})

	return {
		createIncome,
		isPending
	}
}
