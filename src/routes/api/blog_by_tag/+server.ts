// Import the necessary modules.
// The 'db' module from '@vercel/postgres' is used to interact with the PostgreSQL database. You can create a client to connect to your Postgres database (pooled) using the db method. Vercel will automatically manage connections to your database for you.Creating a client is preferred over the sql helper if you need to make multiple queries or want to run transactions, as sql will connect for every query.
import { db } from '@vercel/postgres';
// The 'json' function from '@sveltejs/kit' is used to send JSON responses to the client.
import { json } from '@sveltejs/kit';

// Define an asynchronous GET function that returns a Promise of a Response object.
// This function will be the endpoint for handling GET requests to your route. Promise<Response> as a return type means that the function will asynchronously return an HTTP response. This is commonly used in web APIs and server-side code to handle requests and send back responses.
export async function GET(): Promise<Response> {
	// Connect to the PostgreSQL database using the 'db.connect()' method.
	// This creates a new client instance for executing SQL queries.
	const client = await db.connect();

	try {
		// Execute a SQL query using the connected client.
		// The query selects various fields from the 'blog_posts' table and orders them by 'created_at' in descending order.
		// The result of the query is stored in the 'rows' variable.
		const { rows } = await client.sql`
		SELECT 
		trimmed_tag AS tag,
		json_agg(json_build_object('title', title, 'slug', slug)) AS posts
		FROM (
			SELECT
			UNNEST(string_to_array(tag_set, ',')) AS original_tag,
			TRIM(UNNEST(string_to_array(tag_set, ','))) AS trimmed_tag,
			title,
			slug
			
			FROM blog_posts
			) sub
			GROUP BY
			trimmed_tag;

		`;

		// Return a JSON response containing the queried rows.
		// The 'json' function takes the data to be sent as JSON and automatically sets the appropriate headers.
		return json({ rows });
	} catch (error) {
		// In case of an error (e.g., query failure, database connection issue), return a JSON response with the error.
		// The status code is set to 500, indicating an internal server error.
		return json({ error }, { status: 500 });
	}
	//When using the @vercel/postgres SDK with the db method to connect to your PostgreSQL database, Vercel automatically manages connections for you. This means you do not need to explicitly close the connection using a finally block or any other method. The SDK handles the connection management, making it more efficient and suitable for serverless environments where connection pooling and optimal resource usage are crucial.
}
