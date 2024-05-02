

import { useQuery } from '@tanstack/react-query'
import { ChangeEvent, useEffect, useState } from 'react'

import type { BdrResponse } from '@/types/bdr.types'

import { useSearchParams } from 'next/navigation'
import { bdrService } from '@/services/bdr.services'



export const useBdr = () => {

	const { data, isLoading } = useQuery({
		queryKey: ['Bdr'],
		queryFn: () => bdrService.getBdr()
	})

	const [item, setItems] = useState<BdrResponse[] | undefined>(
		data?.data
	)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { item, isLoading }
}
