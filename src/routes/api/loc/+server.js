import { json } from '@sveltejs/kit';

export async function GET({ request }) {
	const ip = request.headers.get('x-forwarded-for') || 'unknown';
	const city = request.headers.get('x-vercel-ip-city') || 'unknown';
	const userAgent = request.headers.get('user-agent') || 'unknown';
	const language = request.headers.get('accept-language') || 'unknown';
	const referrer = request.headers.get('referer') || 'unknown';
	const cookies = request.headers.get('cookie') || 'unknown';
	const contentType = request.headers.get('content-type') || 'unknown';
	return json({ ip, city, userAgent, language, referrer, cookies, contentType });
}
