import { sql } from '@vercel/postgres';
// import { createPool } from '@vercel/postgres';
// import { POSTGRES_URL } from '$env/static/private';
// const pool = createPool({
// connectionString: POSTGRES_URL
// });
export const prerender = false;

export async function load({}) {
	const { rows } =
		await sql`SELECT id,title, tag_set,image_url,created_at from blog_posts order by created_at desc;`;
	return { blogPosts: rows };
}
