import type { PageServerLoad, Actions } from './$types';
import { createD1Client } from '$lib/server/d1client';
import { users } from '../schema';

export const load = (async ({ platform }) => {
	const d1Client = createD1Client(platform?.env?.DB);
	const result = await d1Client.select().from(users).all();
	return { users: result };
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ platform, request }) => {
		const data = await request.formData();
		const name = data.get('name');
		if (!name) {
			return { success: false, error: 'Name is required' };
		}
		const d1Client = createD1Client(platform?.env?.DB);
		await d1Client.insert(users).values({ name: name.toString() }).execute();
		return { success: true };
	}
} satisfies Actions;
