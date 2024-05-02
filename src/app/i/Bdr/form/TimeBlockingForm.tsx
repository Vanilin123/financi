import { Controller, SubmitHandler, useFormContext } from 'react-hook-form'

import type { TypeBdr } from '@/types/bdr.types'

import { useCreateBdr } from './useCreateExpenses'
import { useUpdateBdr } from './useUpdateExpenses'
import { Field } from '@/compounents/ui/fields/Field'
import { Button } from '@/compounents/ui/buttons/Button'
import { DateRange } from 'react-date-range'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useExpenses } from '../../AddTask/hooks/useTimeBlocks'
import { useincome } from '../../AddTask/Plus/hooks/useTimeBlocks'


export function BdrForm() {
	const { items } = useExpenses()
		const { item } = useincome()
	const [state, setState] = useState([
		{
		  startDate: new Date(),
		  endDate: null,
		  key: 'selection'
		}
	  ]);
	const { register, watch, reset, handleSubmit, control} =
		useFormContext<TypeBdr>()

	const existsId = watch('id')

	const { updateBdr } = useUpdateBdr(existsId)
	const { createBdr, isPending } = useCreateBdr()

	const onSubmit: SubmitHandler<TypeBdr> = data => {
		let s =state.map(a => a.startDate);
		let e =state.map(a => a.endDate);
		let p = s[0]
		let n:any = e[0]
		
		const result = item?.filter((word) => ((Date.parse(word.createdAt as string) < n.getTime())));
		const result2 = result?.filter((word) => ((Date.parse(word.createdAt as string) > p.getTime())));
		

		const resultItems = items?.filter((word) => ((Date.parse(word.createdAt as string) < n.getTime())));
		const resultItems2 = resultItems?.filter((word) => ((Date.parse(word.createdAt as string) > p.getTime())));
		const resultItemsIndirect = resultItems2?.filter((word) => (word.priority === 'производственные' ));
		const resultItemsEnum = resultItems2?.filter((word) => (word.priority === 'косвенные' ));
		const totalIncome = result2?.reduce(
			(total, currentItem) => (total = total + currentItem.price),
			0,
		  );
		  const totalExpensesIndirect = resultItemsIndirect?.reduce(
			(total, currentItem) => (total = total + currentItem.price),
			0,
		  );
		  const totalExpensesEnum = resultItemsEnum?.reduce(
			(total, currentItem) => (total = total + currentItem.price),
			0,
		  );

		  const total = item?.reduce(
			(total, currentItem) => (total = total + currentItem.price),
			0,
		  );

		  const totalIndirect = resultItems2?.filter((word) => (word.priority === 'производственные' ));
		  const total2 = totalIndirect?.reduce(
			(total, currentItem) => (total = total + currentItem.price),
			0,
		  );
		  const totalEnum = resultItems2?.filter((word) => (word.priority === 'косвенные' ));
		  const total3 = totalEnum?.reduce(
			(total, currentItem) => (total = total + currentItem.price),
			0,
		  );

var a = Date.parse(p.toString());
var b = Date.parse(n.toString());

// получаем количество дней между датами
var days = Math.floor(Math.abs(b-a)/(1000*60*60*24)) ;
console.log(days)

		data.planrevenue = (((total as number) / (item?.length as number)) * days)
		data.planproductioncosts = (((total2 as number) / (totalIndirect?.length as number)) * days)
		data.planoperationalprofit = (data.planrevenue as number) - (data.planproductioncosts as number);
		data.planindirectcosts = (((total3 as number) / (totalEnum?.length as number)) * days)
		data.plannetprofit = data.planoperationalprofit - (data.planindirectcosts as number);
		data.planebint = data.planoperationalprofit * 0.16;
		data.plangrossprofit = data.plannetprofit - data.planebint;
		data.revenue = totalIncome;
		data.productioncosts = totalExpensesIndirect;
		data.operationalprofit = (data.revenue as number) - (data.productioncosts as number);
		data.indirectcosts = totalExpensesEnum;
		data.netprofit = data.operationalprofit - (data.indirectcosts as number);
		data.ebint = data.operationalprofit * 0.16;
		data.grossprofit = data.netprofit - data.ebint;
		const {id, ...rest } = data
		const dto = { ...rest }

		  console.log(data)
		if (id) {
			updateBdr({
				id,
				data: dto
			})
		} else {
			createBdr(dto)
		}

		reset({
			name: '',
			id: undefined,
		})
	}

	return (
		<div className='form_bdr'>
			<h4>Создайте бюджет</h4>
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-3/5'
			>
			<Field
				{...register('name', {
					required: true
				})}
				id='name'
				label='название бюджета'
				placeholder='название бюджета'
				extra='mb-4'
			/>
			<DateRange
  			editableDateInputs={true}
  			onChange={item => setState([item.selection])}
  			moveRangeOnFirstSelection={false}
  			ranges={state}
			/>
		<div>
				
			</div>
			<Button
				type='submit'
				disabled={isPending}
				className='mt-6'
			>
				{existsId ? 'Update' : 'Create'}
			</Button>
		</form>
		</div>
	)
}
