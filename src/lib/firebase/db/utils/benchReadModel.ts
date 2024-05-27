// import type { SeatType } from '$lib/components/ui/bench/types';
import { db } from "../../init";
import { DocumentReference, doc, getDoc } from "firebase/firestore";

type SeatType = any;

export const benchReadSeatsRef = doc(
  db,
  "$lib/servernch-read",
  "all-seats"
) as DocumentReference<{
  seats: Array<SeatType>;
}>;

export const allSeatsRead = async () =>
  (await getDoc(benchReadSeatsRef)).data();
