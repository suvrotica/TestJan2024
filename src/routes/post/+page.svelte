<script>
	let title = '';
	let content = '';
	let imageUrl = ''; // This will be updated with the URL from the uploaded file
	let tagSet = '';
	let file;

	function onChange(event) {
		file = event.target.files[0];
	}
</script>

<form method="post" enctype="multipart/form-data">
	<input type="text" bind:value={title} name="title" placeholder="Title" required />
	<textarea
		bind:value={content}
		name="content"
		placeholder="Content"
		rows="10"
		cols="50"
		required
	/>
	<input type="hidden" bind:value={imageUrl} name="image_url" />
	<input
		type="text"
		bind:value={tagSet}
		name="tag_set"
		placeholder="Enter tags (comma-separated e.g. tag1,tag2,tag3)"
		required
	/>

	<input
		type="file"
		id="image-upload"
		name="image-upload"
		accept="image/*,video/mpeg"
		on:change={onChange}
	/>

	<button type="submit">Submit Post</button>
</form>

