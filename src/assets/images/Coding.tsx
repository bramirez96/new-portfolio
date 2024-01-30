// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import React from 'react';
import Image from './Image';
import _coding from './coding.svg';

export default function Coding(props: React.HTMLProps<HTMLImageElement>) {
    return <Image {...props} src={_coding} />;
}
