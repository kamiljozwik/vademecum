import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
// Taken from Firebase -> Project Overview -> ⚙️ -> Project Settings -> Service Accounts
import { PUBLIC_FB_PROJECT_ID } from "$env/static/public";
import { FB_CLIENT_EMAIL, FB_PRIVATE_KEY } from "$env/static/private";
import pkg from "firebase-admin";
import type { UserCollection } from "../../firebase/db/types";

try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: PUBLIC_FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY,
    }),
  });
} catch (e: any) {
  if (!/already exists/u.test(e.message)) {
    console.error("Firebase admin initialization error", e.stack);
  }
}

/** Verify user on server. */
export const adminAuth = getAuth();

export const adminDB = getFirestore();

/** Get user doc on server. */
export const userDoc = (uid: string) => {
  const userDocRef = adminDB.collection("users").doc(uid);

  const geData = async () =>
    (await userDocRef.get()).data() as UserCollection["data"];

  const updateData = async (obj: UserCollection["data"]) =>
    userDocRef.update(obj);

  return {
    geData,
    updateData,
  };
};
