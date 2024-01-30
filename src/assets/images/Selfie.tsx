// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import React from 'react';
import Image from './Image';

export default function Selfie({
    src = new URL('./selfie.jpg', import.meta.url).href,
    ...props
}: React.HTMLProps<HTMLImageElement>) {
    return <Image src={src} {...props} />;
}
