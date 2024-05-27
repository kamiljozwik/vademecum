import { db, user } from "../..";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { get } from "svelte/store";

export const addGeneralMessage = async (data: Record<string, string>) => {
  const $user = get(user);
  const uid = $user?.uid ?? "";

  try {
    await addDoc(collection(db, "generalMessage"), {
      uid,
      ...data,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.log(error);
  }
};
