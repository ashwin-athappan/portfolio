export interface Contact {
    _id?: string;
    email: string;
    message: string;
    contactDate?: Date;
}

export interface ContactRequest {
    email: string;
    message: string;
}
