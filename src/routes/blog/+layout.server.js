import { sql } from '@vercel/postgres';
export const prerender = false;
export async function load({}) {
	const { rows, fields } = await sql`SELECT * FROM blog_posts ORDER BY ${title};`;
	return { blogPosts: rows };
}
