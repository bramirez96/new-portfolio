// ! Copyright (c) 2024, Brandon Ramirez, brr.dev

import { MouseEvent } from 'react';

const RIPPLE_CLASS = 'ui-ripple-circle';
// !IMPORTANT: This needs to be >= the CSS animation duration
const RIPPLE_CLEANUP_TIMEOUT_MS = 1000;

/**
 * Build and trigger a ripple element based on the input mouse event.
 * @see https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/
 */
export default function createRipple(
    event: MouseEvent,
    rippleTarget?: Element
) {
    // Get the button that was pressed from the event object
    rippleTarget ??= event.currentTarget;

    // Create a new span element for our ripple
    const ripple = document.createElement('span');
    ripple.classList.add(RIPPLE_CLASS);

    // Get the max diameter and radius of the button that was pressed
    const diameter = Math.max(
        rippleTarget.clientWidth,
        rippleTarget.clientHeight
    );
    const radius = diameter / 2;

    // Set the height and width of our ripple to the rippleTarget diameter
    ripple.style.width = `${diameter}px`;
    ripple.style.height = `${diameter}px`;
    // Set CSS left and top based on click location, and rippleTarget position and radius
    ripple.style.left = `${
        event.clientX - (rippleTarget.clientLeft + radius)
    }px`;
    ripple.style.top = `${event.clientY - (rippleTarget.clientTop + radius)}px`;

    // Add the ripple element onto the rippleTarget element
    rippleTarget.appendChild(ripple);

    // After a set duration, clean up the ripple
    setTimeout(() => {
        ripple.remove();
    }, RIPPLE_CLEANUP_TIMEOUT_MS);
}
