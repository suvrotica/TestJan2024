<script lang="ts">
	import { enhance } from '$app/forms';
	export let form;

	let file: File | null = null;

	function onChange(event: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		file = (event.target as HTMLInputElement)?.files?.[0] ?? null;
	}
</script>

<main>
	<h1>Symphony Sapphires Blob on Vercel</h1>
	<div>
		<form
			action="?/upload"
			method="POST"
			enctype="multipart/form-data"
			use:enhance={() => {
				return async ({ update }) => {
					file = null;
					update({ reset: true });
				};
			}}
		>
			<div>
				<h2>Upload a file</h2>
				<p>Accepted formats: .png, .jpg, .gif</p>
				<label for="image-upload">
					{#if !file}
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
								<path d="M12 12v9" />
								<path d="m16 16-4-4-4 4" />
							</svg>
							<p>Click to upload.</p>
							<p>Max file size: 10MB</p>
						</div>
					{:else}
						<p>{file.name}</p>
					{/if}
				</label>
				<input
					id="image-upload"
					name="image-upload"
					type="file"
					accept="image/*,video/mpeg"
					on:change={onChange}
				/>
			</div>

			<button disabled={!file}> Confirm upload </button>
			{#if form && !file}
				<div>
					<p>File uploaded!</p>
					<p>
						Your file has been uploaded to{' '}
						<a href={form.uploaded} target="_blank" rel="noopener noreferrer">
							{form.uploaded}
						</a>
					</p>
				</div>
			{/if}
		</form>
	</div>
</main>
