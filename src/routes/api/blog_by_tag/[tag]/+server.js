import { db } from '@vercel/postgres';
import { json } from '@sveltejs/kit';

// @ts-ignore
export async function GET({ params }) {
	// Extract the tag from the request parameters and convert it to lowercase
	const tag = params.tag.toLowerCase();

	const client = await db.connect();

	try {
		const sqlQuery = `
            SELECT
                LOWER(trimmed_tag) AS tag,
                json_agg(json_build_object('title', title, 'slug', slug)) AS posts
            FROM (
                SELECT
                    UNNEST(string_to_array(tag_set, ',')) AS original_tag,
                    TRIM(UNNEST(string_to_array(tag_set, ','))) AS trimmed_tag,
                    title,
                    slug
                FROM
                    blog_posts
            ) sub
            WHERE
                LOWER(trimmed_tag) = $1
            GROUP BY
                LOWER(trimmed_tag);
        `;

		const { rows } = await client.query(sqlQuery, [tag]);

		// Diagnostics: Log the SQL query and the tag being used
		// console.log('SQL Query:', sqlQuery);
		// console.log('Tag:', tag);

		return json({ rows });
	} catch (error) {
		// Log the error for diagnostics
		// @ts-ignore
		console.error('Error:', error.message);
		// @ts-ignore
		return json({ error: error.message }, { status: 500 });
	}
}
