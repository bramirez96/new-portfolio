// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import React, { useEffect, useState } from 'react';

export default function useEmptyTracker({
    inputRef,
    initialValue = true,
}: {
    inputRef: React.RefObject<HTMLInputElement>;
    initialValue?: boolean;
}): [isEmpty: boolean] {
    const [isEmpty, setIsEmpty] = useState(initialValue);

    useEffect(() => {
        const target = inputRef.current;

        // If the field is empty, set the flag to `true`
        function _UpdateOnChange(event: Event) {
            setIsEmpty(!(event.target as HTMLInputElement)?.value?.trim());
        }

        if (target) {
            // Run the handler on the `input` event to include ALL changes
            target.addEventListener('input', _UpdateOnChange);

            return () => {
                target.removeEventListener('input', _UpdateOnChange);
            };
        }
    }, [inputRef]);

    return [isEmpty];
}
