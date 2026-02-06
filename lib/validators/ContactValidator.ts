import { IValidator, ValidationResult } from "@/lib/interfaces/IValidator";
import { ContactRequest } from "@/lib/types/Contact";

export class ContactValidator implements IValidator<ContactRequest> {
    validate(data: ContactRequest): ValidationResult {
        const errors: Record<string, string> = {};

        if (!data.email || data.email.trim() === '') {
            errors.email = "Please enter an email";
        } else if (!this.isValidEmail(data.email)) {
            errors.email = "Please enter a valid email";
        }

        if (!data.message || data.message.trim() === '') {
            errors.message = "Please enter a message";
        }

        return {
            isValid: Object.keys(errors).length === 0,
            errors,
        };
    }

    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}
