import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import DashboardLayout from './../compounents/dashboardlayout/DashboardLayout'

const zen = Noto_Sans({
	subsets: ['cyrillic', 'latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-zen',
	style: ['normal']
})

export const metadata: Metadata = {
	title: {
		default: 'test__privs',
		template: `%s | test__privs`
	},
	description: 'Best one for planning from RED GROUP [htmllessons.ru]'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className=''>
				<Providers>
				<DashboardLayout>{children}</DashboardLayout>
				</Providers>
			</body>
		</html>
	)
}
