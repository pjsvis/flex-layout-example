export interface ExtraPart {
	headerextra: string;
	inset: string;
}

export interface Xkcd {
	month: string;
	num: number;
	link: string;
	year: string;
	news: string;
	safe_title: string;
	transcript: string;
	alt: string;
	img: string;
	title: string;
	extra_parts?: ExtraPart;
	day: string;
}