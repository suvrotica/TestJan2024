import { db } from '@vercel/postgres';
import { json } from '@sveltejs/kit';

// @ts-ignore
export async function GET({ params }) {
	// Extracting tag and slug from the parameters
	const { tag, slug } = params;
	const tagLower = tag.toLowerCase();
	const slugLower = slug.toLowerCase();

	const client = await db.connect();

	try {
		const sqlQuery = `
            SELECT title, content, image_url, created_at
            FROM blog_posts
            WHERE LOWER(tag_set) LIKE '%' || $1 || '%'
            AND LOWER(slug) = $2
            LIMIT 1;
        `;

		// Executing the query with the provided tag and slug
		const { rows } = await client.query(sqlQuery, [tagLower, slugLower]);

		// Check if a post was found
		if (rows.length === 0) {
			return json({ error: 'Post not found' }, { status: 404 });
		}

		// Return the post details
		return json({ post: rows[0] });
	} catch (error) {
		// Handle any errors that occur during the query
		// @ts-ignore
		console.error('Error:', error.message);
		// @ts-ignore
		return json({ error: error.message }, { status: 500 });
	}
}
