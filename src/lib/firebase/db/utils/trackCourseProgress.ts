import { updateUserData } from "..";
import { arrayRemove, arrayUnion } from "firebase/firestore";

type Args = {
  course: string;
  lesson: string;
  complete: boolean;
};

export async function setProgress({ course, lesson, complete }: Args) {
  updateUserData({
    [`progress.${course}`]: complete ? arrayUnion(lesson) : arrayRemove(lesson),
  });
}
