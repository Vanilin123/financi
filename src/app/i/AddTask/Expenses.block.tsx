import { Edit, Loader, Radius, Trash } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import type {
	ExpensesResponse,
	TypeExpenses
} from '@/types/expenses.types'


import { useDeleteExpenses } from './hooks/useDeleteExpenses'

export function Expenses({ item }: { item: ExpensesResponse }) {
	
	const { reset } = useFormContext<TypeExpenses>()
	const { deleteExpenses, isDeletePending } = useDeleteExpenses(item.id)

	return (
            <div className='block__list--items'>
					<div className='avatar'
				style={{
					backgroundColor: item.color || 'lightgray',
				}}
			>

					</div>
						<p className='items__name'>{item.name}</p>
						<p>{item.price}</p>
					<div className='buttons_trash'>
					<button
						onClick={() => {
							reset({
								id: item.id,
								name: item.name,
								price: item.price
							})
						}}
						className='opacity-50 transition-opacity hover:opacity-100 mr-2'
					>
						<Edit size={25} />
					</button>
					<button
						onClick={() => deleteExpenses()}
						className='opacity-50 transition-opacity hover:opacity-100'
					>
						{isDeletePending ? <Loader size={25} /> : <Trash size={25} />}
					</button>
				</div>
				</div>
				
	)
}
