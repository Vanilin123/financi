'use client'

import Link from 'next/link'
import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'

export function Sidebar() {
	console.log(MENU)
	return (
		<header className='header--container'>
			<div className='container header' >
				<div>
				<Link
					href='/'
					className=''
				>
					
					<svg width="142" height="32" viewBox="0 0 142 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1687 6H24L13.8313 19H0L10.1687 6Z" fill="#155EEF"/>
<path d="M10.9935 19.9648L7 25H21.6894L32 12H21.1583L14.8412 19.9648H10.9935Z" fill="#312ECB"/>
<path d="M111.854 22.3162L107.005 9.84232H110.766L113.451 17.6144H113.633L116.193 9.84232H120L114.8 23.8571C114.362 25.0505 113.754 25.9417 112.976 26.5309C112.205 27.1276 111.212 27.4259 109.996 27.4259H108.376V24.2423H109.792C110.653 24.2423 111.269 23.7967 111.639 22.9054L111.854 22.3162Z" fill="#101828"/>
<path d="M95.4419 15.9604C95.4192 14.7745 95.676 13.6944 96.2123 12.7201C96.7486 11.7382 97.5152 10.9602 98.5122 10.3862C99.5168 9.81214 100.65 9.5289 101.911 9.53646C103.603 9.53646 105.012 10.0085 106.137 10.9527C107.293 11.9043 107.95 13.1166 108.108 14.5895H104.46C104.279 14.0381 103.966 13.6 103.52 13.2752C103.074 12.9505 102.546 12.7881 101.934 12.7881C101.073 12.7881 100.382 13.0864 99.8605 13.6831C99.3393 14.2722 99.0787 15.0313 99.0787 15.9604C99.0787 16.8894 99.3431 17.6523 99.8718 18.2489C100.401 18.8456 101.095 19.144 101.956 19.144C102.546 19.144 103.063 18.9891 103.509 18.6795C103.962 18.3698 104.264 17.9657 104.415 17.4672H108.086C107.882 18.9476 107.225 20.141 106.114 21.0474C105.012 21.9462 103.618 22.3956 101.934 22.3956C100.99 22.4031 100.106 22.2408 99.2826 21.9084C98.4594 21.5685 97.7645 21.1078 97.198 20.5262C96.6391 19.9371 96.201 19.2497 95.8838 18.4642C95.5741 17.6711 95.4268 16.8365 95.4419 15.9604Z" fill="#101828"/>
<path d="M86.9832 22.0897H83.3804V9.84235H86.7679V11.1792H86.9605C87.24 10.6958 87.6705 10.3031 88.2521 10.001C88.8337 9.69129 89.4984 9.53645 90.2461 9.53645C91.5679 9.53645 92.6291 9.94809 93.4298 10.7714C94.2304 11.572 94.6307 12.6219 94.6307 13.921V22.0897H91.0392V15.0313C91.0392 14.3818 90.8579 13.8606 90.4954 13.4678C90.1404 13.0751 89.6645 12.8787 89.0678 12.8787C88.456 12.8787 87.9538 13.1015 87.561 13.5471C87.1758 13.9928 86.9832 14.5517 86.9832 15.2239V22.0897Z" fill="#101828"/>
<path d="M69.0982 16.0283C69.0982 14.0872 69.6081 12.5275 70.6277 11.3492C71.6776 10.1407 73.0221 9.53645 74.6611 9.53645C75.4541 9.53645 76.149 9.70262 76.7457 10.035C77.35 10.3597 77.8069 10.7601 78.1166 11.2359H78.3092V9.84235H81.9007V22.0897H78.3319V20.6961H78.1393C78.026 20.8774 77.8862 21.0511 77.7201 21.2173C77.5615 21.3835 77.3462 21.5647 77.0743 21.7611C76.8024 21.95 76.4663 22.101 76.0659 22.2143C75.6656 22.3352 75.2276 22.3956 74.7517 22.3956C73.0674 22.3956 71.7003 21.814 70.6504 20.6508C69.6156 19.5028 69.0982 17.9619 69.0982 16.0283ZM72.735 15.9604C72.735 16.9045 72.9956 17.6711 73.5168 18.2603C74.0379 18.8494 74.7215 19.144 75.5674 19.144C76.4058 19.144 77.0818 18.8456 77.5954 18.2489C78.1166 17.6522 78.3772 16.8894 78.3772 15.9604C78.3772 15.0011 78.1128 14.2345 77.5841 13.6604C77.063 13.0788 76.3832 12.7881 75.5448 12.7881C74.7139 12.7881 74.0379 13.0826 73.5168 13.6718C72.9956 14.2609 72.735 15.0238 72.735 15.9604Z" fill="#101828"/>
<path d="M60.6395 22.0897H57.0367V9.84235H60.4243V11.1792H60.6169C60.8963 10.6958 61.3268 10.3031 61.9084 10.001C62.49 9.69129 63.1547 9.53645 63.9024 9.53645C65.2242 9.53645 66.2854 9.94809 67.0861 10.7714C67.8867 11.572 68.287 12.6219 68.287 13.921V22.0897H64.6955V15.0313C64.6955 14.3818 64.5142 13.8606 64.1517 13.4678C63.7967 13.0751 63.3209 12.8787 62.7242 12.8787C62.1124 12.8787 61.6101 13.1015 61.2173 13.5471C60.8321 13.9928 60.6395 14.5517 60.6395 15.2239V22.0897Z" fill="#101828"/>
<path d="M52.2261 7.93898C51.8334 7.59154 51.637 7.11947 51.637 6.52278C51.637 5.92608 51.8334 5.45402 52.2261 5.10657C52.6264 4.75158 53.1363 4.57408 53.7556 4.57408C54.375 4.57408 54.8848 4.75158 55.2851 5.10657C55.6703 5.44646 55.8629 5.92608 55.8629 6.54544C55.8629 7.14969 55.6703 7.62175 55.2851 7.96164C54.8999 8.30153 54.3901 8.47148 53.7556 8.47148C53.1363 8.47148 52.6264 8.29398 52.2261 7.93898ZM55.5684 22.0897H51.9656V9.84236H55.5684V22.0897Z" fill="#101828"/>
<path d="M43.994 12.6408H42V9.84239H44.096V9.04931C44.096 7.70486 44.519 6.64365 45.3649 5.86569C46.2184 5.08017 47.3551 4.6874 48.7751 4.6874H50.5425V7.65577H49.1943C48.658 7.65577 48.2502 7.7955 47.9707 8.07497C47.6913 8.34688 47.5515 8.72453 47.5515 9.20793V9.84239H50.6332V12.6408H47.5968V22.0897H43.994V12.6408Z" fill="#101828"/>
</svg>
				</Link>
				</div>
				<div className='header'>
				{MENU.map(item => (
						<MenuItem
							item={item}
							key={item.link}
						/>))}
				</div>
			</div>
		</header>
	)
}
