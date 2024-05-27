export type TopNavLink = {
	name: string;
	url?: string;
	children?: {
		name: string;
		url: string;
	}[];
};
