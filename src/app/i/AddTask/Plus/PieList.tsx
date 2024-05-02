import { useincome} from './hooks/useTimeBlocks'
import PieChart from './Pie'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement,Tooltip);

export function Pie() {
	const { item } = useincome()
    
	return (
		<div className='form__list'>
        <h4>График распределения доходов</h4>
        <PieChart items={item}/>
		</div>
			
	)
}