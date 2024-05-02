

import { useQuery } from '@tanstack/react-query'
import { ChangeEvent, useEffect, useState } from 'react'

import type { ExpensesResponse } from '@/types/expenses.types'
import { expensesService } from '@/services/expenses.services'
import { useSearchParams } from 'next/navigation'



export const useExpenses = () => {

	const { data, isLoading } = useQuery({
		queryKey: ['expenses'],
		queryFn: () => expensesService.getExpenses()
	})

	const [items, setItems] = useState<ExpensesResponse[] | undefined>(
		data?.data
	)

	useEffect(() => {
		setItems(data?.data)
	}, [data?.data])

	return { items, isLoading }
}
