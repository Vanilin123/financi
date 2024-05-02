import { ExpensesResponse, TypeExpenses } from '@/types/expenses.types';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
  );
  
  
  export interface labels{
    labels:string|undefined
  }
  
  export function LineFC({ items }: { items: ExpensesResponse[] | undefined }) {
  const labels:string[] = []
    const data:number[] = []
    const color:string[] = []
    items?.map(item => (
        labels.push((item.updatedAt as string).slice(0,10)),
        data.push(item.price),
        color.push(item.color)
        ))
        const dataLine = {
            labels,
            datasets: [
              {
                fill: true,
                label: 'Dataset 2',
                data: data,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              },
            ],
          };
    return <Line  data={dataLine} />;
  }
  
  