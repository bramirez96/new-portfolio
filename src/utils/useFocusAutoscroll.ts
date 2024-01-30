// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import React, { useEffect } from 'react';

export default function useFocusAutoscroll(
    inputRef: React.RefObject<HTMLInputElement>
): void {
    useEffect(() => {
        const target = inputRef.current;

        // When the input is focused, re-trigger the selected range to move the cursor into view
        function _ScrollOnFocus(event: FocusEvent) {
            // This has to be run on a timeout due to a browser quirk
            setTimeout(() => {
                // In some browsers, selection start and end are always 0 until after focus
                const {
                    selectionStart = -1,
                    selectionEnd = -1,
                    selectionDirection = undefined,
                } = (event.target as HTMLInputElement) ?? {};

                target?.setSelectionRange(
                    selectionStart,
                    selectionEnd,
                    selectionDirection ?? undefined
                );
            }, 0);
        }

        if (target) {
            // Bind our handler
            target.addEventListener('focus', _ScrollOnFocus);

            // Cleanup our handler
            return () => {
                target.removeEventListener('focus', _ScrollOnFocus);
            };
        }
    }, [inputRef]);
}
