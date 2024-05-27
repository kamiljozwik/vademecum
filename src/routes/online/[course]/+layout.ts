import {
  getChaptersWithLessons,
  type Glob,
} from "$lib/utils/courses/getChaptersWithLessons";
import type { Chapter, Lesson } from "$lib/utils/courses/types";
import type { LayoutLoad } from "./$types";

export const load = (async ({ params, parent }) => {
  const chaptersPaths: Glob<Chapter> = import.meta.glob(
    "../_content/*/*/_index.md",
    {
      eager: true,
    }
  );

  const lessonsPaths: Glob<Lesson> = import.meta.glob(
    ["../_content/**/*.md", "!../_content/**/_index.md"],
    {
      eager: true,
    }
  );

  const course = params.course;
  const allCourses = await parent();

  const currentCourse = allCourses.courses.find((c) => c.meta.slug === course);

  const chaptersWithLessons = getChaptersWithLessons(
    params.course,
    chaptersPaths,
    lessonsPaths
  );
  return { chaptersWithLessons, currentCourse };
}) satisfies LayoutLoad;
