import type { PageServerLoad } from "./$types";

import { priceList } from "$lib/data/priceList";

import { adminDB } from "$lib/server/firebase/admin";

export const load = (async () => {
  return {};
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
  },
};
