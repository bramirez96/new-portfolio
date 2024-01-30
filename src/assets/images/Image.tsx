// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import React from 'react';

export default function Image({
    alt,
    ...imageProps
}: React.HTMLProps<HTMLImageElement>) {
    return <img alt={alt ?? ''} {...imageProps} />;
}
