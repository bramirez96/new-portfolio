// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import React, { useMemo } from 'react';
import { Images } from '../../../assets';
import './Hero.scss';
import { Button } from '../../atoms';
import { useMediaQueries } from '../../../utils';
import { MediaQueryMap, UISizes } from '../../lib';
import { AiOutlineExport } from 'react-icons/ai';

export type HeroProps = React.HTMLProps<HTMLDivElement> & {};

// Map the media query size to the button size
const HERO_BUTTON_SIZES: MediaQueryMap<UISizes> = {
    small: 'small',
    medium: 'default',
    large: 'large',
    xLarge: 'x-large',
};

export default function Hero({ className, ...props }: HeroProps) {
    const numYears = useMemo(() => new Date().getFullYear() - 2010, []);
    const { getMappedValue } = useMediaQueries();

    const buttonSize = getMappedValue(HERO_BUTTON_SIZES) ?? 'default';

    return (
        <div className="ui-hero" {...props}>
            <div className="ui-hero-container">
                <div className="ui-section-info">
                    <div className="ui-section-heading">
                        <h2>hi,&nbsp;</h2>
                        <h1>
                            i'm <span className="alt">brandon</span>!&nbsp;
                            <span
                                role="img"
                                aria-label="rock and roll horns hand emoji"
                            >
                                &#x1F44B;&#x1F3FC;
                            </span>
                        </h1>
                    </div>
                    <p>
                        i'm a{' '}
                        <span className="alt">full-stack&nbsp;developer</span>{' '}
                        based in the bay&nbsp;area, with{' '}
                        <span className="alt">over {numYears}&nbsp;years</span>{' '}
                        of programming experience, and a passion for{' '}
                        <span className="alt">solving&nbsp;problems</span>.
                    </p>
                    {/*TODO probably make this a component*/}
                    <div className="ui-button-row">
                        <Button
                            link="/bio"
                            linkTarget="_self"
                            type="primary"
                            size={buttonSize}
                        >
                            get in touch
                        </Button>
                        <Button
                            type="text"
                            link="https://github.com/bramirez96"
                            size={buttonSize}
                            iconRight={<AiOutlineExport />}
                        >
                            look at code
                        </Button>
                    </div>
                </div>
                <div className="ui-section-image">
                    <Images.Selfie />
                </div>
            </div>
        </div>
    );
}
