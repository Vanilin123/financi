import { axiosWithAuth } from "@/api/axios"
import { BdrResponse, TypeBdr } from "@/types/bdr.types"


class BdrService {
	private BASE_URL = '/Bdr'

	async getBdr() {
		const response = await axiosWithAuth.get<BdrResponse[]>(this.BASE_URL)
		return response
	}

	async createBdr(data: TypeBdr) {
		const response = await axiosWithAuth.post(this.BASE_URL, data)
		return response
	}

	async updateBdr(id: string, data: TypeBdr) {
		const response = await axiosWithAuth.put(`${this.BASE_URL}/${id}`, data)
		return response
	}

	async deleteBdr(id: string) {
		const response = await axiosWithAuth.delete(`${this.BASE_URL}/${id}`)
		return response
	}
}

export const bdrService = new BdrService()
