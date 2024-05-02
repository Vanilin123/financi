import { axiosWithAuth } from "@/api/axios"
import { ExpensesResponse, TypeExpenses } from "@/types/expenses.types"


class ExpensesService {
	private BASE_URL = '/expenses'

	async getExpenses() {
		const response = await axiosWithAuth.get<ExpensesResponse[]>(this.BASE_URL)
		return response
	}

	async createExpenses(data: TypeExpenses) {
		const response = await axiosWithAuth.post(this.BASE_URL, data)
		return response
	}

	async updateExpenses(id: string, data: TypeExpenses) {
		const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteExpenses(id: string) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const expensesService = new ExpensesService()
