import { put } from '@vercel/blob';
import { error } from '@sveltejs/kit';
import { createSlug } from '$lib/utility-functions';
export const prerender = false;
import { db } from '@vercel/postgres';

const client = await db.connect();
/**
 * @param {string | number | boolean | null | undefined} title
 * @param {string} slug
 * @param {string | number | boolean | null | undefined} content
 * @param {string | number | boolean | null | undefined} imageUrl
 * @param {string | number | boolean | null | undefined} tagSet
 */
async function createBlogPost(title, slug, content, imageUrl, tagSet) {
	try {
		await client.sql`
            CREATE TABLE IF NOT EXISTS blog_posts (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                content TEXT NOT NULL,
                image_url VARCHAR(255) NOT NULL,
                tag_set VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
            );
        `;

		const rowInserted = await client.sql`
            INSERT INTO blog_posts (title, slug, content, image_url, tag_set)
            VALUES (${title},  ${content}, ${imageUrl}, ${tagSet});
        `;

		return rowInserted;
	} catch (err) {
		// Handle or log the error
		console.error('Error in createBlogPost:', err);
		throw err; // Rethrow the error if you want the caller to handle it as well
	}
}

export const actions = {
	// @ts-ignore
	default: async ({ request }) => {
		const form = await request.formData();
		const title = form.get('title');
		const content = form.get('content');
		const file = form.get('image-upload');
		const tagSet = form.get('tag_set');

		if (!file) {
			throw error(400, { message: 'No file to upload.' });
		}

		// Upload the file and get the URL from vercel blob store
		const { url } = await put(file.name, file, { access: 'public' });

		console.log('Uploaded file to: ', url);
		try {
			await createBlogPost(title, createSlug(title), content, url, tagSet);
			return { message: 'Blog post was created' };
		} catch (err) {
			// @ts-ignore
			console.log('Error in posting to server: ', err.message);
			// @ts-ignore
			return { error: err.message };
		}
	}
};
