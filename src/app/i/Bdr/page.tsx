import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constant/seo.constants'

import { Bdr } from './Bdr'

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE
}

export default function DashboardPage() {
	return (
		<div>
			<Bdr/>
		</div>
	)
}
