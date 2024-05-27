import { type Readable, derived } from "svelte/store";
import { page } from "$app/stores";

import { docStore } from "./docStore";
import { user } from "../../auth/userStore";
import type { UserCollection } from "../types";

// Use a derived store to automatically subscribe to both the user’s auth state and Firestore data at the same time.

/* Access user document from firestore */
export const userDataStore: Readable<UserCollection["data"] | null> = derived(
  user,
  ($user, set) => {
    if ($user) {
      return docStore<UserCollection["data"]>(`users/${$user.uid}`).subscribe(
        set
      );
    } else {
      set(null);
    }
  }
);

export const canAccess = () =>
  derived([userDataStore, page], ([$userData, $page]) => {
    const courseValidTo = $userData?.courses?.[$page.params.course];
    const chapterValidTo =
      $userData?.chapters?.[`${$page.params.course}/${$page.params.chapter}`];

    if (!courseValidTo && !chapterValidTo) return false;

    return (
      (!!courseValidTo && new Date(courseValidTo) > new Date()) ||
      (!!chapterValidTo && new Date(chapterValidTo) > new Date())
    );
  });
