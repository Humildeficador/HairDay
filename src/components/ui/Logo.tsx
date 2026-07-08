import LogoIcon from '~/assets/logo.svg?react'

export function Logo() {
	return (
		<div
			className={`
    bg-gray-600 flex items-center justify-center rounded-br-xl px-5 py-3
    absolute top-0 left-0 w-fit
    `}
		>
			<LogoIcon />
		</div>
	)
}
