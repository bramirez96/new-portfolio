// ! Copyright (c) 2024, Brandon Ramirez

import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import { classnames } from '../../../classnames';
import './Text.scss';

export type TextSizes =
	| 'x-small'
	| 'small'
	| 'medium'
	| 'large'
	| 'x-large';

export type TextTypes =
	| 'primary'
	| 'secondary';

export interface TextProps
	extends PropsWithChildren<
		DetailedHTMLProps<
			HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
	> {
	size?: TextSizes;
	type?: TextTypes;
}

/**
 * A general-purpose text component with proper typography.
 */
export default function Text({
	size,
	className,
	type,
	children,
	...props
}: TextProps) {
	return <div
		className={
			classnames(
				'ui-text',
				className,
				size && `size-${size}`,
				type && `type-${type}`,
			)
		}
		{...props}
	>
		{children}
	</div>;
}
