import { dev } from '$app/environment';

// Define a type with an index signature for base styles.
type BaseStyle = {
	[key: string]: string;
};

// Base styles with an index signature
const baseStyles: BaseStyle = {
	padmar: 'p-[2px] m-[2px] ',
	shadowTop:
		'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.6),0_2px_4px_-2px_rgba(0,0,0,0.1)] p-2 dark:shadow-[0_8px_6px_-1px_rgba(255,255,255,0.2),0_2px_2px_-4px_rgba(255,255,255,0.1)] bg-white dark:bg-neutral-200 rounded-lg dark:rounded-lg',

	shadow: 'shadow-lg dark:shadow-lg dark:shadow-neutral-900 shadow-neutral-800',
	image: ' m-auto p-[2px] bg-cover bg-center float-none rounded-lg  md:float-right  md:w-1/3',
	rounded: 'rounded-md',
	border: 'border-[1px] border-neutral-400 dark:border-neutral-600',
	text: 'text-black dark:text-neutral-100 text-base',
	bg: 'bg-neutral-100 dark:bg-neutral-800',
	bg2: 'bg-neutral-100 dark:bg-neutral-950',

	grad1:
		'bg-gradient-to-r from-neutral-300 to-bg-neutral-100 dark:from-neutral-700 dark:to-bg-neutral-950',
	grad2:
		'bg-gradient-to-l from-neutral-300 to-bg-neutral-100 dark:from-neutral-950 dark:to-bg-neutral-700',
	hover: 'hover:bg-neutral-500 dark:hover:bg-neutral-700',
	font: 'font-light dark:font-thin'
};

// Functions to generate complex styles using base styles.
function generateStyle(classes: string[]): string {
	return classes.map((className) => baseStyles[className] ?? className).join(' ');
}

// Style strings for specific elements

export const sectionStyle = generateStyle([
	'pb-6',
	// 'pr-4',
	'm-[2px]',

	'clearfix',
	'overflow-x-hidden',
	baseStyles.grad1,
	baseStyles.rounded
]);
// export const divContainerStyle = 'mx-auto grid  p-4 lg:grid-cols-12 lg:gap-4 ';
// export const divContentStyle = ' lg:col-span-7 mb-12';
// export const divCarouselStyle = 'display:block lg:col-span-5 lg:mt-0 lg:flex ';
// export const divCarouselStyle = 'flex flex-row-reverse lg:col-span-5 lg:mt-0';
export const divContainerStyle =
	'mx-auto flex flex-col-reverse p-4 lg:grid lg:grid-cols-12 lg:gap-4';
export const divContentStyle = 'mb-12 lg:col-span-7';
export const divCarouselStyle = 'lg:col-span-5 lg:mt-0';

export const imgStyle = generateStyle([
	'ml-2',
	'mr-4',
	'mt-[2px]',
	baseStyles.image,
	baseStyles.shadowTop
]);
export const svgStyle = generateStyle([
	'my-[2px]',
	'-mr-2',
	'h-auto',
	'w-[150px]',
	'rounded-sm',
	'bg-neutral-100',
	'p-0',
	baseStyles.shadow
]);

export const navStyle = generateStyle([
	'flex',
	'flex-row',
	'justify-between',
	'm-[2px]',
	'fixed',
	'inset-x-0',
	'top-0',
	'z-50',
	baseStyles.rounded,
	baseStyles.border,
	baseStyles.grad1
]);

export const footStyle = generateStyle([
	'flex',
	'flex-row',
	'justify-between',
	'm-[2px]',
	'fixed',
	'inset-x-0',
	'bottom-0 ',
	baseStyles.rounded,
	baseStyles.border,
	// baseStyles.
	baseStyles.bg2
]);

export const ulStyle = generateStyle(['flex', 'flex-row', 'gap-2', 'mt-[2px]']);
export const btnClass = generateStyle([
	baseStyles.text,
	baseStyles.bg,
	baseStyles.hover,
	baseStyles.border,
	baseStyles.font,
	'rounded-lg',
	'text-sm',
	'border-neutral-400',
	'dark:border-neutral-600',
	'px-2',
	'py-2',
	'mx-2',
	'my-auto'
]);

export const text_bg_color_style = generateStyle([
	baseStyles.font,
	'text-neutral-500',
	'hover:text-neutral-600',
	baseStyles.hover,
	baseStyles.bg,
	'dark:bg-neutral-950'
]);

export const preStyle = generateStyle([
	'text-md',
	'my-auto',
	baseStyles.rounded,
	baseStyles.bg,
	baseStyles.text,
	baseStyles.font,
	'px-2',
	'py-0',
	'bg-neutral-200',
	baseStyles.shadow
]);

export const pStyle = generateStyle([
	'text-justify',
	baseStyles.text,
	baseStyles.font,
	baseStyles.padmar
]);

export const a_style = generateStyle([
	'inline-flex',
	'justify-center',
	baseStyles.rounded,
	baseStyles.border,
	'px-1',
	baseStyles.font,
	baseStyles.text,
	baseStyles.grad1,
	baseStyles.hover,
	baseStyles.border,
	'focus:ring-4',
	'focus:ring-neutral-100',
	'dark:hover:bg-neutral-700',
	'dark:focus:ring-neutral-800',
	'mx-1',
	'my-2'
]);
export const h2Style = generateStyle([
	baseStyles.padmar,
	'mb-3', // Smaller margin-bottom than h1
	'max-w-xl', // Max-width between h1 and h4
	'text-3xl', // Smaller text size than h1
	'font-bold', // Bold but not as heavy as extrabold
	'leading-tight', // Tighter line leading
	'tracking-normal', // Normal tracking
	'md:text-4xl', // Medium device text size
	'lg:text-5xl', // Large device text size
	'dark:text-white' // Preserving dark mode text color
]);

export const h3Style = generateStyle([
	baseStyles.padmar,
	'mb-3',
	'max-w-lg',
	'text-2xl',
	'font-bold',
	'leading-snug',
	'tracking-normal',
	'md:text-3xl',
	'lg:text-4xl',
	'dark:text-white'
]);

export const h5Style = generateStyle([
	baseStyles.padmar,
	'mb-2',
	'max-w-md',
	'text-lg',
	'font-medium',
	'leading-normal',
	'tracking-normal',
	'md:text-xl',
	'lg:text-2xl',
	'dark:text-white'
]);

export const h6Style = generateStyle([
	baseStyles.padmar,
	'mb-2',
	'max-w-sm',
	'text-base',
	'font-medium',
	'leading-normal',
	'tracking-normal',
	'md:text-lg',
	'lg:text-xl',
	'dark:text-white'
]);

export const h1Style = generateStyle([
	baseStyles.padmar,
	'mb-4',
	'max-w-2xl',
	'text-4xl',
	'font-extrabold',
	'leading-none',
	'tracking-tight',
	'md:text-5xl',
	'xl:text-6xl',
	'dark:text-white'
]);
export const h4Style = generateStyle([
	baseStyles.padmar,
	'mb-2', // Smaller margin-bottom than h1
	'max-w-xl', // Max-width can be smaller for h4
	'text-xl', // Smaller text size
	'font-bold', // Bold but not as heavy as extrabold
	'leading-tight', // Tighter line leading
	'tracking-normal', // Normal tracking
	'md:text-2xl', // Medium device text size
	'lg:text-3xl', // Large device text size
	'dark:text-white' // Preserving dark mode text color
]);

export const mode_style = generateStyle([
	'mt-4',
	'lg:mt-0',
	baseStyles.bg,
	baseStyles.hover,
	'text-white',
	'font-bold',
	'p-2',
	baseStyles.rounded,
	'w-10',
	'h-10',
	'flex',
	'items-center',
	'justify-center'
]);

// Metadata
export const title = 'Suvro Ghosh Blog | Satire | Technology Insights & Expert Opinions';
export const description =
	"Join Suvro Ghosh's journey through the evolving landscape of technology. This blog offers a blend of detailed tech tutorials, industry trend analyses, and personal stories, providing a unique view from a tech expert's lens. Stay ahead of the curve with insights into the latest developments and thoughtful perspectives on tech's impact in everyday life. Perfect for tech enthusiasts, professionals, and learners alike.";
export const url = dev ? 'http://localhost:5173/' : 'https://suvroghosh.blog/';

export type Post = {
	id: number;
	title: string;
	content: string;
	image_url: string;
	tag_set: string;
	created_at: Date;
	slug: string;
};

export const emojis: { [key: number]: string } = {
	// Informational responses
	100: 'ℹ️', // Continue
	101: '🔄', // Switching Protocols

	// Successful responses
	200: '✅', // OK
	201: '🆕', // Created
	202: '👍', // Accepted
	204: '🚫', // No Content

	// Redirection messages
	301: '🔀', // Moved Permanently
	302: '➡️', // Found
	307: '🔁', // Temporary Redirect

	// Client error responses
	400: '🚫', // Bad Request
	401: '🔒', // Unauthorized
	403: '⛔', // Forbidden
	404: '❓', // Not Found
	408: '⏳', // Request Timeout
	418: '🫖', // I'm a teapot
	420: '🫠', // Enhance Your Calm (Twitter)
	429: '🚦', // Too Many Requests

	// Server error responses
	500: '💥', // Internal Server Error
	501: '❗', // Not Implemented
	502: '🚧', // Bad Gateway
	503: '🔧', // Service Unavailable
	504: '⏱️' // Gateway Timeout
};
