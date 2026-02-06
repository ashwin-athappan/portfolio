import { Contact } from "@/lib/types/Contact";

export interface IContactRepository {
    create(contact: Omit<Contact, '_id' | 'contactDate'>): Promise<Contact>;
}
