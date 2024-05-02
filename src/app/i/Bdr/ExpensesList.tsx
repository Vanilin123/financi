

import { Loader } from 'lucide-react'

import { useBdr} from './hooks/useTimeBlocks'
import { Bdr } from './Expenses.block'
import { useSearchParams } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement,Tooltip);
export function BdrList() {
	const { item, isLoading } = useBdr()
	
	return (
		<div className='form__list'>
			<h4>БДР</h4>
				<div className='block__info__bdr'>
						{item?.length ? (
							item?.map(item => (
								<Bdr
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
