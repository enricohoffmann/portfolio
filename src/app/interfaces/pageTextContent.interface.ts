import { Link } from "./link.interface";

export type TextRunStyle = 'accent' | 'dot' | 'lineBreak' | 'link';

export interface TextRun {
    text: string,
    style?: TextRunStyle,
    link?: Link
}
export interface Paragraph {
    runs: TextRun[];
}

export interface TextSection {
    sectionH2?: string;
    sectionH3?: string;
    title?: string;
    paragraphs: Paragraph[];
}

export interface PageTextContent {
    pageTitle: string;
    sections: TextSection[];
}