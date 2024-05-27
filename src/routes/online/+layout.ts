import type { LayoutLoad } from "./$types";
import { getAllCourses } from "$lib/utils/courses/getAllCourses";

export const load = (async () => {
  const paths = import.meta.glob("./_content/*/*.md", { eager: true });
  const courses = getAllCourses(paths);

  return { courses };
}) satisfies LayoutLoad;
