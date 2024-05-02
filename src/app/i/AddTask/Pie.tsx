import { Pie } from "react-chartjs-2";
import { useExpenses } from "./hooks/useTimeBlocks";
import { ExpensesResponse } from "@/types/expenses.types";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);


const PieChart = ({ items }: { items: ExpensesResponse[] | undefined }) => {
    const labels:string[] = []
    const data:number[] = []
    const color:string[] = []
    items?.map(item => (
        labels.push(item.name),
        data.push(item.price),
        color.push(item.color)
        ))
    const dataPie = {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: color,
          },
        ],
      };

  return (
      <Pie data={dataPie}
       />
  );
};

export default PieChart;