// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import React from 'react';
import classnames from '@brr-dev/classnames';
import { Button, Input } from '../../atoms';
import { AiOutlineSearch } from 'react-icons/ai';
import './FilterBar.scss';

export type FilterBarProps = React.HTMLProps<HTMLDivElement>;
export default function FilterBar(props: FilterBarProps) {
    // TODO fix this
    return (
        <div className={classnames('ui-filter-bar')}>
            <div className={classnames('ui-filter-items')}>
                <Input
                    placeholder="search projects..."
                    iconLeft={<AiOutlineSearch />}
                />
                <Button type="secondary">search</Button>
            </div>
        </div>
    );
}
