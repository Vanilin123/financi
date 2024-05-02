import { Controller, SubmitHandler, useFormContext } from 'react-hook-form'

import type { TypeIncome } from '@/types/income.types'

import { useCreateIncome } from './useCreateExpenses'
import { useUpdateIncome } from './useUpdateExpenses'
import { Field } from '@/compounents/ui/fields/Field'
import { Button } from '@/compounents/ui/buttons/Button'
import { COLORS } from './colors.data'
import { SingleSelect } from '@/compounents/ui/task-edit/SingleSelect'


export function IncomeForm() {
	const { register, watch, reset, handleSubmit, control} =
		useFormContext<TypeIncome>()

	const existsId = watch('id')

	const { updateIncome } = useUpdateIncome(existsId)
	const { createIncome, isPending } = useCreateIncome()

	const onSubmit: SubmitHandler<TypeIncome> = data => {
		const { color, id, ...rest } = data
		const dto = { ...rest, color: color || undefined }

		console.log(data)
		if (id) {
			updateIncome({
				id,
				data: dto
			})
		} else {
			createIncome(dto)
		}

		reset({
			color: COLORS[COLORS.length - 1],
			name: '',
			id: undefined,
		})
	}

	return (
		<div className='form_block-tasks'>
			<h4>Ввести доходы</h4>
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='w-3/5'
			>
			<Field
				{...register('name', {
					required: true
				})}
				id='name'
				label='введите статью расхода'
				placeholder='Ввести статью расхода'
				extra='mb-4'
			/>

			<Field
				{...register('price', {
					required: true,
					valueAsNumber: true
				})}
				id='price'
				label='Введите расход'
				placeholder='Введите расход'
				isNumber
				extra='mb-4'
			/>

		<div>
				<Controller
					control={control}
					name='color'
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							data={COLORS.map(item => ({
								value: item,
								label: item
							}))}
							onChange={onChange}
							value={value || COLORS[COLORS.length - 1]}
							isColorSelect
						/>
					)}
				/>
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
