// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

export type UISize2XSmall = '2x-small';
export type UISizeXSmall = 'x-small';
export type UISizeSmall = 'small';
export type UISizeDefault = 'default';
export type UISizeLarge = 'large';
export type UISizeXLarge = 'x-large';
export type UISize2XLarge = '2x-large';
export type UISizes =
    | UISize2XSmall
    | UISizeXSmall
    | UISizeSmall
    | UISizeDefault
    | UISizeLarge
    | UISizeXLarge
    | UISize2XLarge;

export type MediaQueryMap<ValueType = unknown> = {
    small?: ValueType;
    medium?: ValueType;
    large?: ValueType;
    xLarge?: ValueType;
    xxLarge?: ValueType;
};
