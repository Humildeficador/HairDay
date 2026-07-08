import { cva, type VariantProps } from 'class-variance-authority'
import type { HTMLAttributes } from 'react'
import { cn } from '~/utils/cn'

export const textVariants = cva('', {
	variants: {
		size: {
			sm: 'text-sm leading-5',
			md: 'text-base leading-6',
		},
	},
	defaultVariants: {
		size: 'md',
	},
})

interface TextProps
	extends HTMLAttributes<HTMLElement>,
		VariantProps<typeof textVariants> {
	children: React.ReactNode
}

export function Text({ size, className, children, ...props }: TextProps) {
	return (
		<span className={cn(textVariants({ size }), className)} {...props}>
			{children}
		</span>
	)
}
