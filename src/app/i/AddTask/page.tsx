import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constant/seo.constants'

import { AddTask } from './AddTask'

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
}

export default function DashboardPage() {
	return (
		<div>
			<AddTask />
		</div>
	)
}
