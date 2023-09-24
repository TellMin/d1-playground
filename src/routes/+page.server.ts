import type { PageServerLoad } from './$types';
import { createD1Client } from '$lib/server/d1client';
import { users } from '../schema';

export const load = (async ({ platform }) => {
	const d1Client = createD1Client(platform?.env?.DB);
	const result = await d1Client.select().from(users).all();
	return { users: result };
}) satisfies PageServerLoad;
