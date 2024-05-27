import type { User } from 'firebase/auth';

export const addCustomCalims = async (user: User) => {
	const token = await user.getIdTokenResult();
	const customClaims = token.claims;

	if (customClaims?.username) {
		// make call to api to set custom calims
		// https://firebase.google.com/docs/auth/admin/custom-claims
	}
};
