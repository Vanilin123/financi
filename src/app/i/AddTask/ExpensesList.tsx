

import { Loader } from 'lucide-react'

import { useExpenses} from './hooks/useTimeBlocks'
import { Expenses } from './Expenses.block'
import { useSearchParams } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

export function ExpensesList() {
	const { items, isLoading } = useExpenses()
	
	return (
		<div className='form__list'>
			<h4>Расходы</h4>
				<div className='block__info'>
						{items?.length ? (
							items?.map(item => (
								<Expenses
									key={item.id}
									item={item}
								/>
							))
						) : (
							<div>Добавьте статьи расходов</div>
						)}
				</div>
		</div>
			
	)
}
