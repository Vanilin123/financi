import { useExpenses} from './hooks/useTimeBlocks'
import PieChart from './Pie'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement,Tooltip);

export function Pie() {
	const { items } = useExpenses()
    
	return (
		<div className='form__list'>
        <h4>График распределения расходов</h4>
        <PieChart items={items}/>
		</div>
			
	)
}