import { axiosWithAuth } from "@/api/axios"
import { IncomeResponse, TypeIncome } from "@/types/income.types"


class IncomeService {
	private BASE_URL = '/income'

	async getIncome() {
		const response = await axiosWithAuth.get<IncomeResponse[]>(this.BASE_URL)
		return response
	}

	async createIncome(data: TypeIncome) {
		const response = await axiosWithAuth.post(this.BASE_URL, data)
		return response
	}

	async updateIncome(id: string, data: TypeIncome) {
		const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteIncome(id: string) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const incomeService = new IncomeService()
