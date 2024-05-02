import { Edit, Loader, Radius, Trash } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import type {
	IncomeResponse,
	TypeIncome
} from '@/types/income.types'


import { useDeleteIncome } from './hooks/useDeleteIncome'

export function Income({ item }: { item: IncomeResponse }) {
	
	const { reset } = useFormContext<TypeIncome>()
	const { deleteIncome, isDeletePending } = useDeleteIncome(item.id)

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
						onClick={() => deleteIncome()}
						className='opacity-50 transition-opacity hover:opacity-100'
					>
						{isDeletePending ? <Loader size={25} /> : <Trash size={25} />}
					</button>
				</div>
				</div>
				
	)
}
