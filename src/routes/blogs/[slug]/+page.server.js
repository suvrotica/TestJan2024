import { sql } from '@vercel/postgres';
// import { createPool } from '@vercel/postgres';
// import { POSTGRES_URL } from '$env/static/private';
// const pool = createPool({
// connectionString: POSTGRES_URL
// });
// import { createSlug } from '$lib/utility-functions';

export const prerender = false;

export async function load({ params }) {
	const slug = params.slug;

	// Fetch all post meta data but not content
	const metaDataQueryResult = await sql`SELECT id, slug, tag_set FROM blog_posts;`;
	const metaDataRows = metaDataQueryResult.rows;

	// Find the post that matches the slug
	const metaDataPost = metaDataRows.find((row) => row.slug === slug);

	// id of the matched post
	const id = metaDataPost.id;

	// get the post whose title matched slug
	const matchedPostQueryResult = await sql`SELECT * FROM blog_posts WHERE id=${id};`;
	const matchedPost = matchedPostQueryResult.rows;

	const post = matchedPost[0];

	if (post) {
		return { metaDataRows, post };
	} else {
		// Handle the case where no post matches the slug
		throw new Error('Post not found');
	}
}
