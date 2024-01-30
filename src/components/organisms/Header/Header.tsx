// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { HTMLProps } from 'react';
import { Button, Logo } from '../../atoms';
import './Header.scss';
import { useMediaQueries } from '../../../utils';
import { MediaQueryMap, UISizes } from '../../lib';
import {classnames} from "../../../libs";

export type HeaderProps = HTMLProps<HTMLDivElement> & {
    smallHeader?: boolean;
};

const HEADER_LOGO_SIZE_MAP: MediaQueryMap<UISizes> = {
    small: 'x-small',
    medium: 'small',
    large: 'default',
    xLarge: 'large',
};

const HEADER_BUTTON_SIZE_MAP: MediaQueryMap<UISizes> = {
    small: 'small',
    medium: 'default',
    large: 'large',
    xLarge: 'x-large',
};

export default function Header({ className, ...props }: HeaderProps) {
    const { getMappedValue } = useMediaQueries();

    const logoSize = getMappedValue(HEADER_LOGO_SIZE_MAP);
    const buttonSize = getMappedValue(HEADER_BUTTON_SIZE_MAP);

    return (
        <div className={classnames('ui-header')} {...props}>
            <div className={classnames('ui-section-left', 'ui-header-section')}>
                <Logo size={logoSize} />
            </div>
            <div
                className={classnames('ui-section-middle', 'ui-header-section')}
            ></div>
            <div
                className={classnames('ui-section-right', 'ui-header-section')}
            >
                <Button
                    size={buttonSize}
                    link="/"
                    linkTarget="_self"
                    type="ghost"
                >
                    projects
                </Button>
                <Button
                    size={buttonSize}
                    link="/bio"
                    linkTarget="_self"
                    type="ghost"
                >
                    bio
                </Button>
                <Button
                    size={buttonSize}
                    link="/contact"
                    linkTarget="_self"
                    type="ghost"
                >
                    contact
                </Button>
                {/*<Button*/}
                {/*    type="ghost"*/}
                {/*    size={buttonSize}*/}
                {/*    link="https://github.com/bramirez96"*/}
                {/*    iconLeft={<AiOutlineGithub />}*/}
                {/*/>*/}
                {/*<Button*/}
                {/*    type="ghost"*/}
                {/*    size={buttonSize}*/}
                {/*    link="https://linkedin.com/in/bramirez96"*/}
                {/*    iconLeft={<AiOutlineLinkedin />}*/}
                {/*/>*/}
            </div>
        </div>
    );
}
