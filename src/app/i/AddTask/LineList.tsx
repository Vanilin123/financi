import { useExpenses} from './hooks/useTimeBlocks'
import { LineFC } from './Line';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement,Tooltip);

export function LineList() {
	const { items } = useExpenses()
    
	return (
		<div className='form__list'>
        <h4>График распределения расходов</h4>
        <LineFC items={items}/>
		</div>
			
	)
}