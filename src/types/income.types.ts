import type { IBase } from './root.types'

export interface IncomeResponse extends IBase {
	name: string
	price:number
	color: string
}

export type TypeIncome = Partial<Omit<IncomeResponse, 'createdAt' | 'updatedAt'>>
