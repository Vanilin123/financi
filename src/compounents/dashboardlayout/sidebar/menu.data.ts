import {
	KanbanSquare,
	LayoutDashboard,
} from 'lucide-react'

import { DASHBOARD_PAGES } from '../../../config/pages-url.config'

import type { IMenuItem } from './menu.interface'

export const MENU: IMenuItem[] = [
	{
		icon: LayoutDashboard,
		link: DASHBOARD_PAGES.HOME,
		name: 'Дашборд'
	},
	{
		icon: KanbanSquare,
		link: DASHBOARD_PAGES.ADDTASK,
		name: 'Статьи'
	},
	{
		icon: KanbanSquare,
		link: DASHBOARD_PAGES.BDR,
		name: 'БДР'
	},
]
