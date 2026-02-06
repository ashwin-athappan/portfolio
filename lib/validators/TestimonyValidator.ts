import { IValidator, ValidationResult } from "@/lib/interfaces/IValidator";
import { TestimonyRequest } from "@/lib/types/Testimony";

export class TestimonyValidator implements IValidator<TestimonyRequest> {
    validate(data: TestimonyRequest): ValidationResult {
        const errors: Record<string, string> = {};

        if (!data.name || data.name.trim() === '') {
            errors.name = "Name is required";
        }

        if (!data.relation || data.relation.trim() === '') {
            errors.relation = "Relation is required";
        }

        if (!data.comment || data.comment.trim() === '') {
            errors.comment = "Comment is required";
        }

        if (!data.whereWeFirstMet || data.whereWeFirstMet.trim() === '') {
            errors.whereWeFirstMet = "Where we first met is required";
        }

        if (!data.professionalRelation || data.professionalRelation.trim() === '') {
            errors.professionalRelation = "Professional relation is required";
        }

        return {
            isValid: Object.keys(errors).length === 0,
            errors,
        };
    }
}
