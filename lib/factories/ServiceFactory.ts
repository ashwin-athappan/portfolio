import { ContactService } from "@/lib/services/ContactService";
import { TestimonyService } from "@/lib/services/TestimonyService";
import { ContactRepository } from "@/lib/repositories/ContactRepository";
import { TestimonyRepository } from "@/lib/repositories/TestimonyRepository";
import { ContactValidator } from "@/lib/validators/ContactValidator";
import { TestimonyValidator } from "@/lib/validators/TestimonyValidator";

export class ServiceFactory {
    private static contactRepository: ContactRepository | null = null;
    private static testimonyRepository: TestimonyRepository | null = null;
    private static contactValidator: ContactValidator | null = null;
    private static testimonyValidator: TestimonyValidator | null = null;

    static getContactService(): ContactService {
        if (!this.contactRepository) {
            this.contactRepository = new ContactRepository();
        }
        if (!this.contactValidator) {
            this.contactValidator = new ContactValidator();
        }
        return new ContactService(this.contactRepository, this.contactValidator);
    }

    static getTestimonyService(): TestimonyService {
        if (!this.testimonyRepository) {
            this.testimonyRepository = new TestimonyRepository();
        }
        if (!this.testimonyValidator) {
            this.testimonyValidator = new TestimonyValidator();
        }
        return new TestimonyService(this.testimonyRepository, this.testimonyValidator);
    }
}
