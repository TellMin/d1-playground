<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<h1>Users</h1>

{#each data.users as user}
	<p>{user.id}:{user.name}</p>
{/each}
