

import { useQuery } from '@tanstack/react-query'
import { ChangeEvent, useEffect, useState } from 'react'

import type { IncomeResponse } from '@/types/income.types'

import { useSearchParams } from 'next/navigation'
import { incomeService } from '@/services/income.service'



export const useincome = () => {

	const { data, isLoading } = useQuery({
		queryKey: ['income'],
		queryFn: () => incomeService.getIncome()
	})

	const [item, setItems] = useState<IncomeResponse[] | undefined>(
		data?.data
	)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { item, isLoading }
}
