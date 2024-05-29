import type { Course, CourseData } from "$lib/utils/courses/types";
import type { LayoutLoad } from "./$types";

export const load = (async () => {
  const paths = import.meta.glob("./_content/*/*.md", { eager: true });
  const courses = getAllCourses(paths);

  return { courses };
}) satisfies LayoutLoad;

const getAllCourses = async (paths: Record<string, unknown>) => {
  const courses: CourseData[] = [];

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-2);

    if (
      file &&
      typeof file === "object" &&
      "metadata" in file &&
      "default" in file &&
      slug
    ) {
      const metadata = file.metadata as Omit<Course, "slug">;
      const post = {
        meta: { ...metadata, slug },
        content: file.default,
      } satisfies CourseData;
      courses.push(post);
    }
  }

  return courses.sort((a, b) => b.meta.order - a.meta.order);
};
