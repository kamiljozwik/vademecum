import type { User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { addDocWithId, db } from "../..";

export const addUserToFirestore = async (user: User) => {
  const ref = doc(db, "users", user.uid);
  // TODO: is this check necessary? Maybe it is redundant and drill usage
  const exists = await getDoc(ref).then((doc) => doc.exists());

  if (!exists) {
    addDocWithId({
      uid: user.uid,
      collection: "users",
      data: {
        photoURL: user?.photoURL ?? "",
      },
    });
  }
};
