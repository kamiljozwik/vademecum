import { updateDoc, doc } from "firebase/firestore";
import { get } from "svelte/store";

import { db, type UserCollection } from "../..";
import { user } from "../../auth/userStore";

/** Update single document in user collection */
export const updateUserData = async (data: Partial<UserCollection["data"]>) => {
  const $user = get(user);

  if (!$user) {
    return;
  }

  const userRef = doc(db, "users", $user.uid);

  await updateDoc(userRef, data);
};
