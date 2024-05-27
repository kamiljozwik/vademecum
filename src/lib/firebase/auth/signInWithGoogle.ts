import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { addUserToFirestore } from "../db/utils/addUserToFirestore";
import { setCookie } from "./setCookie";
import { auth } from "../init";

export const signInWithGoogle = async () => {
  // This auth provides only JWT to the FE (which is OK with Firebase SDK), but won't allow us to check auth status on the server. On server we can use cookies.
  const provider = new GoogleAuthProvider();
  const googleUser = await signInWithPopup(auth, provider);

  const user = googleUser.user;
  const idToken = await googleUser.user.getIdToken();

  await addUserToFirestore(user);
  await setCookie(idToken);
};
