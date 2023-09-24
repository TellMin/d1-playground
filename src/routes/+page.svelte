<script lang="ts">
	import type { PageData, ActionData } from './$types';
	export let data: PageData;
	export let form: ActionData;
</script>

<h1>Regist User</h1>

{#if form && !form.success}
	<p>{form.error}</p>
{/if}

<form method="POST">
	<label>Name<input name="name" type="text" /></label>
	<button type="submit">Submit</button>
</form>

{#each data.users as user}
	<p>{user.id}:{user.name}</p>
{/each}
