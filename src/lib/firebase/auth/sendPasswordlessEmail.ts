import {
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  type UserCredential,
} from "firebase/auth";
import { auth } from "..";
import { addUserToFirestore } from "../db/utils/addUserToFirestore";
import { setCookie } from "./setCookie";

const EMAIL_LS = "emailForSignIn";

export const sendPasswordlessEmail = async (email: string, url: string) => {
  const actionCodeSettings = {
    url: `${url}/login`,
    handleCodeInApp: true,
  };

  try {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    window.localStorage.setItem(EMAIL_LS, email);
    const res = `Magic link wysłany do ${email}`;
    return { res };
  } catch (error) {
    return { hasError: true };
  }
};

export const passwordlessSignin = async () => {
  if (isSignInWithEmailLink(auth, window.location.href)) {
    let email = window.localStorage.getItem(EMAIL_LS);
    if (!email) {
      email = window.prompt("Please provide your email for confirmation");
    }

    try {
      const credential = signInWithEmailLink(
        auth,
        email as string,
        window.location.href
      );
      window.localStorage.removeItem(EMAIL_LS);
      return loginHandler(credential);
    } catch (error) {
      return { hasError: true };
    }
  } else {
    return { res: null, serverError: "Invalid link" };
  }
};

async function loginHandler(promise: Promise<UserCredential>) {
  try {
    const res = await promise;
    const user = res.user;
    const idToken = await res.user.getIdToken();

    await addUserToFirestore(user);
    await setCookie(idToken);
    // TODO: maybe show success modal or something
  } catch (err) {
    // TODO: maybe show error modal or something
  }
}
