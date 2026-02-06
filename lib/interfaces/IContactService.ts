import { ContactRequest } from "@/lib/types/Contact";

export interface IContactService {
    submitContactForm(data: ContactRequest): Promise<void>;
}
