import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { TypeBdr } from '@/types/bdr.types'

import { bdrService } from '@/services/bdr.services'

export function useCreateBdr() {
	const queryClient = useQueryClient()

	const { mutate: createBdr, isPending } = useMutation({
		mutationKey: ['create Bdr'],
		mutationFn: (data: TypeBdr) =>
			bdrService.createBdr(data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['Bdr']
			})
		}
	})

	return {
		createBdr,
		isPending
	}
}
