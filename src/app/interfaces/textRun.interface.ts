export type TextRunStyle = 'accent' | 'dot' | 'lineBreak' | 'mailLink';

export interface TextRun {
    text: string,
    style?: TextRunStyle,
    mailRef?: string
}