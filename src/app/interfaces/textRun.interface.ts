export type TextRunStyle = 'nornal' | 'accent' | 'strong' | 'dot';

export interface TextRun {
    text: string,
    style?: TextRunStyle
}