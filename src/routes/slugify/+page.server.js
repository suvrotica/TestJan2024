import { sql } from '@vercel/postgres';
import { POSTGRES_URL } from '$env/static/private';
import { createSlug } from '$lib/utility-functions';
export const prerender = false;







async function slugify() {
	
    try {
	const batchSize = 10; // Number of rows to process per batch
        let offset = 0;
        let updatedRows = 0;
        // Fetch all posts with null slug
	    while (true) {
            const { rows: posts } = await sql`
                SELECT id, title FROM blog_posts 
                WHERE slug IS NULL
                ORDER BY id
                LIMIT ${batchSize} OFFSET ${offset}`;

            if (posts.length === 0) {
                break; // No more rows to update
	    }
		    for (const post of posts) {
                const slug = createSlug(post.title);
                await sql`UPDATE blog_posts SET slug = ${slug} WHERE id = ${post.id}`;
            }

            updatedRows += posts.length;
            offset += batchSize;
	    }

        return {
            status: 200,
            body: { message: `Slugs updated successfully for ${updatedRows} rows` }
        };
    } catch (error) {
        return {
            status: 500,
            body: { error: 'Error updating slugs' }
        };
    }
}

export const actions = {
	update: async ({ request }) => {
		await slugify();
		return { status: 303, headers: { location: '/blogs' } }; // Redirect after successful update
	}
};
