import type { IBase } from './root.types'

export interface ExpensesResponse extends IBase {
	name: string
	priority: string
	price:number
	color: string
}

export type TypeExpenses = Partial<Omit<ExpensesResponse, 'createdAt' | 'updatedAt'>>