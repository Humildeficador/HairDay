import type { Icon, IconProps as PhosphorProps } from '@phosphor-icons/react'
import { cn } from '~/utils/cn'

interface IconProps extends PhosphorProps {
	svg: Icon
}

export function Icon({ svg: SVGComponent, className, ...props }: IconProps) {
	return (
		<SVGComponent
			size={32}
			className={cn(
				'text-yellow hover:text-yellow-dark transition-colors cursor-pointer',
				className,
			)}
			{...props}
		/>
	)
}
