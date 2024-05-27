import { signOut } from "firebase/auth";
import { auth } from "../init";

export const signOutAll = async () => {
  await fetch("/api/signin", { method: "DELETE" });
  await signOut(auth);
};
