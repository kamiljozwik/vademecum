import { db, type Collection, user } from "../..";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { get } from "svelte/store";

type Args = { uid?: string } & Collection;

export const addDocWithId = async ({ uid, collection, data }: Args) => {
  const $user = get(user);

  const id = $user?.uid || uid;

  if (!id) {
    return;
  }

  const docData = {
    ...data,
    createdAt: serverTimestamp(),
  };

  return await setDoc(doc(db, collection, id), docData, { merge: true });
};
