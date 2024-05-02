import { Edit, Loader, Radius, Trash } from 'lucide-react'
import { useFormContext } from 'react-hook-form'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement,Tooltip);

import type {
	BdrResponse,
	TypeBdr
} from '@/types/bdr.types'


import { useDeleteBdr } from './hooks/useDeleteExpenses'
import Link from 'next/link';

export function Bdr({ item }: { item: BdrResponse }) {
	
	const { reset } = useFormContext<TypeBdr>()
	const { deleteBdr, isDeletePending } = useDeleteBdr(item.id)
	return (
            <div className='block__list--items'>
						<p className='items__name'> название бюджета: {item.name}</p>
						<p className='items__pribl'>чистая прибыль: <span className='profit'>{item.grossprofit}</span></p>
						<Link key={item.id} href={`http://localhost:3000/i/Bdr/${item.id}`}>узнать подробнее-&gt;</Link>
					<div className='buttons_trash'>
					<button
						onClick={() => {
							reset({
								id: item.id,
								name: item.name,
							})
						}}
						className='opacity-50 transition-opacity hover:opacity-100 mr-2'
					>
						<Edit size={25} />
					</button>
					<button
						onClick={() => deleteBdr()}
						className='opacity-50 transition-opacity hover:opacity-100'
					>
						{isDeletePending ? <Loader size={25} /> : <Trash size={25} />}
					</button>
				</div>
				</div>
				
	)
}
