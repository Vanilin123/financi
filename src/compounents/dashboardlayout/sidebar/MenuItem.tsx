import Link from 'next/link'

import { IMenuItem } from './menu.interface'

export function MenuItem({ item }: { item: IMenuItem }) {
	return (
		<div className='header__list'>
			<Link
			
				href={item.link}
				className='header__list'
			>
				<item.icon />
				<span>{item.name}</span>
			</Link>
		</div>
	)
}
