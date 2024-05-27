export type Course = {
	lastmod: string;
	title: string;
	description: string;
	order: number;
	tags: string[];
	video: string;
	author: string;
	slug: string;
	draft?: boolean;
	cta?: string;
	free?: boolean;
};

export type Chapter = {
	title: string;
	description?: string;
	order: number;
	slug: string;
	fresh?: boolean;
	free?: boolean;
};

type ExtraLink = {
	title: string;
	href: string;
	desc?: string;
};

export type Lesson = {
	title: string;
	description?: string;
	order: number;
	video?: string;
	video_length?: string;
	free: boolean;
	extra_links?: ExtraLink[];
	slug: string;
};

/** Data (text content) retuened from MD file */
export type MarkdownContent = any;

export type CourseData = {
	meta: Course;
	content: MarkdownContent;
};
