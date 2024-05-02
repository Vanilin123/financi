

import { Loader } from 'lucide-react'


import { Income } from './Expenses.block'
import { useSearchParams } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { useincome } from './hooks/useTimeBlocks';

export function IncomeList() {
	const { item, isLoading } = useincome()
	
	return (
		<div className='form__list'>
			<h4>Доходы</h4>
				<div className='block__info'>
						{item?.length ? (
							item?.map(item => (
								<Income
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
