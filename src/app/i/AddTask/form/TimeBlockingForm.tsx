import { Controller, SubmitHandler, useFormContext } from 'react-hook-form'

import type { TypeExpenses } from '@/types/expenses.types'

import { useCreateExpenses } from './useCreateExpenses'
import { useUpdateExpenses } from './useUpdateExpenses'
import { Field } from '@/compounents/ui/fields/Field'
import { Button } from '@/compounents/ui/buttons/Button'
import { COLORS, VIBOR } from './colors.data'
import { SingleSelect } from '@/compounents/ui/task-edit/SingleSelect'


export function ExpensesingForm() {
	const { register, watch, reset, handleSubmit, control} =
		useFormContext<TypeExpenses>()

	const existsId = watch('id')

	const { updateExpenses } = useUpdateExpenses(existsId)
	const { createExpenses, isPending } = useCreateExpenses()

	const onSubmit: SubmitHandler<TypeExpenses> = data => {
		const { color, id,priority, ...rest } = data
		const dto = { ...rest, color: color || undefined, priority:priority  }


		if (id) {
			updateExpenses({
				id,
				data: dto
			})
		} else {
			createExpenses(dto)
		}

		reset({
			priority:VIBOR[COLORS.length - 1],
			color: COLORS[COLORS.length - 1],
			name: '',
			id: undefined,
		})
	}

	return (
		<div className='form_block-tasks'>
			<h4>Ввести расходы</h4>
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
					name='priority'
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							data={VIBOR.map(item => ({
								value: item,
								label: item
							}))}
							onChange={onChange}
							value={value || VIBOR[VIBOR.length - 1]}
							isColorSelect
						/>
					)}
				/>
			</div>
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
