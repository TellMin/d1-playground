import { drizzle } from 'drizzle-orm/d1';

export const createD1Client = (d1: D1Database | undefined) => {
	if (!d1) {
		throw new Error(`Database not found`);
	}
	return drizzle(d1);
};
