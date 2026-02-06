import { IContactRepository } from "@/lib/interfaces/IContactRepository";
import { Contact } from "@/lib/types/Contact";
import ContactModel from "@/models/Contact";

export class ContactRepository implements IContactRepository {
    async create(contact: Omit<Contact, '_id' | 'contactDate'>): Promise<Contact> {
        const contactObj = new ContactModel({
            email: contact.email,
            message: contact.message,
            contactDate: new Date(),
        });
        const saved = await contactObj.save();
        return {
            _id: saved._id.toString(),
            email: saved.email,
            message: saved.message,
            contactDate: saved.contactDate,
        };
    }
}
