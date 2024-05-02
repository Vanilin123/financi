import axios, { CreateAxiosDefaults } from "axios"

const options: CreateAxiosDefaults = {
	baseURL: 'http://localhost:4200/api',
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
}


export const axiosWithAuth = axios.create(options)