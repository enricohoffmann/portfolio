import { Paragraph } from "./paragraph.interface";

export interface TextSection {
    sectionH2?: string;
    sectionH3?: string;
    title?: string;
    paragraphs: Paragraph[];
}