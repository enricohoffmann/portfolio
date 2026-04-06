export interface MailResponse {
    success?: boolean;
    messageId: string; 
    messageText?: string;
    retryAfter?: number;

}