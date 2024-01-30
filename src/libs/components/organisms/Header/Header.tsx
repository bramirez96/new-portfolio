// ! Copyright (c) 2024, Brandon Ramirez

import { ReactNode } from 'react';
import { classnames } from '../../../classnames';

export interface HeaderProps {
	left?: ReactNode;
	center?: ReactNode;
	right?: ReactNode;
}

/**
 * General header component.
 */
export default function Header(props: HeaderProps) {
	return <div className={classnames('ui-header')} {...props}>
		{/* Header left section */}
		<div className={classnames('ui-header-left')}>{props.left}</div>

		{/* Header title section (hidden if no title passed) */}
		{props.center && <div className={classnames('ui-header-center')}>{props.center}</div>}

		{/* Header right section */}
		<div className={classnames('ui-header-right')}>{props.right}</div>
	</div>;
}
