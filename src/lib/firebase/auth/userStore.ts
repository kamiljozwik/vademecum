import { onAuthStateChanged, type User } from "firebase/auth";
import { writable } from "svelte/store";
import { auth } from "../init";

/**
 * @returns a store with the current firebase user
 */
const userStore = () => {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn("Auth is not initialized or not in browser");
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    };
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
};

/* Simple version for prototyping. */
/*
const currentUser = writable<User | null>(null);
onAuthStateChanged(auth, (user) => {
  currentUser.set(user);
});
*/

const user = userStore();

export { user };
