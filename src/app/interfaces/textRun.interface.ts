import { Link } from "./link.interface";

export type TextRunStyle = 'accent' | 'dot' | 'lineBreak' | 'link';

export interface TextRun {
    text: string,
    style?: TextRunStyle,
    link?: Link
}