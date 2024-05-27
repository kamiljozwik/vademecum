import { doc, onSnapshot } from "firebase/firestore";
import { writable } from "svelte/store";
import { db } from "../..";

/**
 * Universal way to listen to a document in Firestore.
 * It autamatically provide with real time data and unsubscribes when data is not needed.
 * Use this store to easily fetch data from any Firestore document on the client.
 * @param  {string} path document path or reference
 * @returns a store with realtime updates on document data
 */
export const docStore = <T>(path: string) => {
  let unsubscribe: () => void;

  const docRef = doc(db, path);

  const { subscribe } = writable<T | null>(null, (set) => {
    unsubscribe = onSnapshot(docRef, (snapshot) => {
      set((snapshot.data() as T) ?? null);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
    // additionally return the document reference and id
    ref: docRef,
    id: docRef.id,
  };
};
