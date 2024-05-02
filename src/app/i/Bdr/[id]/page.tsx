'use client'
import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constant/seo.constants'
import { TypeBdr } from '@/types/bdr.types'
import { Bdr } from './bdr.show'
import { useBdr } from '../hooks/useTimeBlocks'
import { FormProvider, useForm } from 'react-hook-form'



interface params {
	params:{
	id:string	
	}
}

export default function DashboardPage({params}:params) {
	const methods = useForm<TypeBdr>()
	const { item, isLoading } = useBdr()
	const result = item?.filter((word) => (word.id === params.id ));
	let items
	result?.map(item => (
		items = item
	))
	return (
		<FormProvider{...methods}>
		<div>
			<div className='BDR__TABLE'>
			<Bdr item={items}/>
			</div>
		</div>
		</FormProvider>
	)
}
