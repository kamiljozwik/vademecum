import { adminAuth } from '$lib/server/firebase/admin';
import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	const sessionCookie = event.cookies.get('__session');

	try {
		const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie!);
		// we can access it on any other *.server.ts files
		event.locals.userID = decodedClaims.uid;
		event.locals.userEmail = decodedClaims.email;
	} catch (e) {
		event.locals.userID = undefined;
		event.locals.userEmail = undefined;

		// we run resolve to continue to the next hook (next server logic)
		return resolve(event);
	}

	return resolve(event);
}) satisfies Handle;
