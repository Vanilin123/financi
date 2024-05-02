import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { TypeBdr } from '@/types/bdr.types'

import { bdrService } from '@/services/bdr.services'

export function useUpdateBdr(key?: string) {
	const queryClient = useQueryClient()

	const { mutate: updateBdr } = useMutation({
		mutationKey: ['update Bdr', key],
		mutationFn: ({ id, data }: { id: string; data: TypeBdr }) =>
			bdrService.updateBdr(id, data),
		onSuccess() {
			queryClient.invalidateQueries({
				queryKey: ['Bdr']
			})
		}
	})

	return { updateBdr }
}
