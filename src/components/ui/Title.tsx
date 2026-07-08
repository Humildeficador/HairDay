import { cva, type VariantProps } from 'class-variance-authority'
import type { HTMLAttributes } from 'react'
import { cn } from '~/utils/cn'

export const titleVariants = cva('font-bold', {
	variants: {
		size: {
			sm: 'text-sm leading-5',
			md: 'text-base leading-6',
			lg: 'text-4xl leading-6',
		},
	},
	defaultVariants: {
		size: 'md',
	},
})

interface TitleProps
	extends HTMLAttributes<HTMLElement>,
		VariantProps<typeof titleVariants> {
	children: React.ReactNode
}

export function Title({ size, className, children, ...props }: TitleProps) {
	return (
		<span className={cn(titleVariants({ size }), className)} {...props}>
			{children}
		</span>
	)
}
