// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import React, { useEffect, useState } from 'react';

/**
 * Initialize a boolean state tracking whether an element is focused.
 */
export default function useFocusTracker<
    ElementType extends HTMLElement = HTMLInputElement
>({
    inputRef,
    initialValue = false,
}: {
    inputRef: React.RefObject<ElementType>;
    initialValue?: boolean;
}): [isFocused: boolean] {
    // Initialize a simple boolean state to track focus
    const [isFocused, setIsFocused] = useState(initialValue);

    useEffect(() => {
        const target = inputRef.current;

        function _TrackFocus() {
            setIsFocused(true);
        }

        function _TrackBlur() {
            setIsFocused(false);
        }

        if (target) {
            // Bind our handlers
            target.addEventListener('focus', _TrackFocus);
            target.addEventListener('blur', _TrackBlur);

            // Clean up our handlers
            return () => {
                target.removeEventListener('focus', _TrackFocus);
                target.removeEventListener('blur', _TrackBlur);
            };
        }
    }, [inputRef]);

    // Return our tuple to be destructured in our components
    return [isFocused];
}
