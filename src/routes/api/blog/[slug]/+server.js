import { db } from '@vercel/postgres';
import { json } from '@sveltejs/kit';

// @ts-ignore
export async function GET({ params }) {
	// Extracting the slug from the request parameters and converting it to lowercase
	const slug = params.slug.toLowerCase();

	const client = await db.connect();

	try {
		const sqlQuery = `
            SELECT title, content, image_url, created_at, tag_set
            FROM blog_posts
            WHERE LOWER(slug) = $1
            LIMIT 1;
        `;

		// Executing the query with the provided slug
		const { rows } = await client.query(sqlQuery, [slug]);

		// Checking if a post was found
		if (rows.length === 0) {
			return json({ error: 'Post not found' }, { status: 404 });
		}

		// Returning the post details
		return json({ post: rows[0] });
	} catch (error) {
		// @ts-ignore
		console.error('Error:', error.message);
		// @ts-ignore
		return json({ error: error.message }, { status: 500 });
	}
}
