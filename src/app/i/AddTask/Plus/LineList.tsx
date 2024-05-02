
import { LineFC } from './Line';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useincome } from './hooks/useTimeBlocks';

ChartJS.register(ArcElement,Tooltip);

export function LineList() {
	const { item } = useincome()
    
	return (
		<div className='form__list'>
        <h4>График распределения доходов</h4>
        <LineFC items={item}/>
		</div>
			
	)
}