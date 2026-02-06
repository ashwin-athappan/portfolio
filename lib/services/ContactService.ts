import { IContactService } from "@/lib/interfaces/IContactService";
import { IContactRepository } from "@/lib/interfaces/IContactRepository";
import { ContactValidator } from "@/lib/validators/ContactValidator";
import { ContactRequest } from "@/lib/types/Contact";

export class ContactService implements IContactService {
    constructor(
        private contactRepository: IContactRepository,
        private validator: ContactValidator = new ContactValidator()
    ) {}

    async submitContactForm(data: ContactRequest): Promise<void> {
        const validation = this.validator.validate(data);

        if (!validation.isValid) {
            throw new Error(JSON.stringify(validation.errors));
        }

        await this.contactRepository.create({
            email: data.email.trim(),
            message: data.message.trim(),
        });
    }
}
