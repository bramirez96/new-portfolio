// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import React, { useCallback, useRef } from 'react';
import { HomeTemplateProps } from './HomeTemplate.types';
import './HomeTemplate.scss';
import { Header, Hero } from '../../organisms';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Button } from '../../atoms';
import FilterBar from './FilterBar';
import { Coding } from '../../../assets/images';
import {classnames} from "../../../libs";

export default function HomeTemplate({
    className,
    ...props
}: HomeTemplateProps) {
    // TODO move this stuff
    const cardWallRef = useRef<HTMLDivElement>(null);
    const scrollToCardWall = useCallback(() => {
        cardWallRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [cardWallRef]);

    return (
        <div
            className={classnames(
                'ui-template-home',
                'ui-page-template',
                className
            )}
            {...props}
        >
            <Header />
            <Hero />
            <div className="project-indicator">
                <Button type="text" onClick={scrollToCardWall}>
                    <span>view projects</span>
                    <AiOutlineArrowDown />
                </Button>
            </div>
            <div className="ui-line"></div>
            <FilterBar />
            {/*TODO add card wall*/}
            <div ref={cardWallRef} className="temporary-uh-oh-div">
                <div className="uh-oh-wrapper">
                    <Coding />
                    <p>
                        i'm currently hard at work{' '}
                        <span className="alt">cleaning up old projects</span>,
                        gathering{' '}
                        <span className="alt">
                            feature and process documentation
                        </span>
                        , and piecing together a few{' '}
                        <span className="alt">technical blog posts</span>{' '}
                        explaining some of the stuff i've built.
                    </p>
                    <p>
                        my goal is <span className="alt">3 posts a week</span>,
                        including:
                    </p>
                    <ul>
                        <li>
                            links to my{' '}
                            <span className="alt">technical writing</span> on
                            medium
                        </li>
                        <li>
                            changelogs for any of my published{' '}
                            <span className="alt">npm packages</span>
                        </li>
                        <li>
                            updates to my{' '}
                            <span className="alt">component libraries</span>
                        </li>
                        <li>
                            any other <span className="alt">fun projects</span>{' '}
                            i'm working on
                        </li>
                    </ul>
                    <p>come back soon for more!</p>
                </div>
            </div>
        </div>
    );
}
