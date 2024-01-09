import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

// Initialize a writable store for the orientation
export const orientation: Writable<string> = writable(getInitialOrientation());

// Function to get the initial orientation
function getInitialOrientation(): string {
	if (typeof window !== 'undefined') {
		return window.matchMedia('(orientation: landscape)').matches ? 'landscape' : 'portrait';
	} else {
		// Return a default value for server-side rendering (SSR)
		return 'portrait';
	}
}

// Function to handle orientation changes
function handleOrientationChange(event: MediaQueryListEvent): void {
	const newOrientation: string = event.matches ? 'landscape' : 'portrait';
	orientation.set(newOrientation);
}

// Add event listener on mount (browser-only)
if (typeof window !== 'undefined') {
	window.matchMedia('(orientation: landscape)').addListener(handleOrientationChange);
}

// Remove event listener on destroy (browser-only)
export function cleanupOrientation(): void {
	if (typeof window !== 'undefined') {
		window.matchMedia('(orientation: landscape)').removeListener(handleOrientationChange);
	}
}
