import type { Chapter, Lesson, MarkdownContent } from "./types";

type LessonData = {
  lessonMeta: Lesson;
  lessonContent: MarkdownContent;
};

type GlobData<T = unknown> = { metadata: T; default: MarkdownContent };
export type Glob<T = unknown> = Record<string, GlobData<T>>;

export const getChaptersWithLessons = (
  course: string,
  chaptersPaths: Glob<Chapter>,
  lessonsPaths: Glob<Lesson>
) => {
  const categoriesWithLessons = new Map<
    string,
    {
      lessons: LessonData[];
      chapterMeta: Chapter;
      chapterContent: MarkdownContent;
    }
  >();

  const chapters = Object.keys(chaptersPaths)
    .filter((p) => p.includes(`/_content/${course}/`))
    .map((p) => p.split("/").at(-2));

  for (const chapter of chapters) {
    if (!chapter) continue;

    const lessons: LessonData[] = Object.entries(lessonsPaths)
      .filter((p) => p[0].includes(`/_content/${course}/${chapter}/`))
      .map((p) => ({
        lessonMeta: {
          ...p[1].metadata,
          slug: p[0].split("/").at(-1)?.replace(".md", "") || "",
        },
        lessonContent: p[1].default,
      }))
      .sort((a, b) => a.lessonMeta.order - b.lessonMeta.order);

    const { metadata, default: content } =
      chaptersPaths[`../_content/${course}/${chapter}/_index.md`];

    categoriesWithLessons.set(chapter, {
      lessons,
      chapterMeta: metadata,
      chapterContent: content,
    });
  }

  const sortedByChapters = new Map(
    [...categoriesWithLessons].sort(
      (a, b) => a[1].chapterMeta.order - b[1].chapterMeta.order
    )
  );

  return sortedByChapters;
};
