// import { sql } from '@vercel/postgres';
// import  createPool from '@vercel/postgres';
import { db } from '@vercel/postgres';
import { Connect } from 'vite';
 
const client = await db.connect();
// await client.sql`SELECT 1`;
// import  POSTGRES_URL  from '$env/static/private';
// const pool = createPool({
// connectionString: POSTGRES_URL
// });
export const prerender = false;

export async function load({}) {
	const { rows } =
		await client.sql`SELECT id,title,slug, tag_set,image_url,created_at from blog_posts order by created_at desc;`;
	return { blogPosts: rows };
}