import { db } from '@vercel/postgres';
import { json } from '@sveltejs/kit';

export async function GET() {
	const client = await db.connect();
	try {
		const sqlQuery = `
            SELECT DISTINCT UNNEST(string_to_array(tag_set, ',')) AS tag
            FROM blog_posts
            WHERE tag_set IS NOT NULL AND TRIM(tag_set) != '';
        `;

		const { rows } = await client.query(sqlQuery);
		const tags = rows.map((row) => row.tag.trim());
		return json(tags);
	} catch (error) {
		return json({ error }, { status: 500 });
	}
}
