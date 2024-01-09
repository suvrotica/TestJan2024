import { createPool } from '@vercel/postgres';
import { POSTGRES_URL } from '$env/static/private';
export const prerender = false;
const pool = createPool({
	connectionString: POSTGRES_URL
});

export async function load({}) {
	const { rows } = await pool.sql`SELECT * FROM blog_posts ORDER BY tag_set ASC`;
	return { blogPosts: rows };
}

async function updateBlogPost(blogPost) {
	await pool.sql`
        UPDATE blog_posts 
        SET title = ${blogPost.title}, content = ${blogPost.content}, image_url = ${blogPost.image_url}, tag_set = ${blogPost.tag_set}
        WHERE id = ${blogPost.id}`;
}

export const actions = {
	update: async ({ request }) => {
		const form = await request.formData();
		const blogPost = {
			id: form.get('id'),
			title: form.get('title'),
			content: form.get('content'),
			image_url: form.get('image_url'),
			tag_set: form.get('tag_set')
		};

		await updateBlogPost(blogPost);
		return { status: 303, headers: { location: '/blogs' } }; // Redirect after successful update
	}
};
