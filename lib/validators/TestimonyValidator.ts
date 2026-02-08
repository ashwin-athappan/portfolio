import { IValidator, ValidationResult } from "@/lib/interfaces/IValidator";
import { TestimonyRequest, TestimonyUpdateRequest, TestimonyStatus } from "@/lib/types/Testimony";

const VALID_STATUSES: TestimonyStatus[] = ["pending", "approved", "rejected"];
const VALID_RELATIONS = ["FRIEND", "FAMILY", "COLLEAGUE", "OTHER"] as const;

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

    validateUpdate(data: TestimonyUpdateRequest): ValidationResult {
        const errors: Record<string, string> = {};
        if (data.name !== undefined && (!data.name || data.name.trim() === '')) {
            errors.name = "Name cannot be empty";
        }
        if (data.relation !== undefined && (!data.relation || !VALID_RELATIONS.includes(data.relation))) {
            errors.relation = "Invalid relation";
        }
        if (data.comment !== undefined && (!data.comment || data.comment.trim() === '')) {
            errors.comment = "Comment cannot be empty";
        }
        if (data.whereWeFirstMet !== undefined && data.whereWeFirstMet.trim() === '') {
            errors.whereWeFirstMet = "Where we first met cannot be empty";
        }
        if (data.professionalRelation !== undefined && data.professionalRelation.trim() === '') {
            errors.professionalRelation = "Professional relation cannot be empty";
        }
        if (data.status !== undefined && !VALID_STATUSES.includes(data.status)) {
            errors.status = "Invalid status";
        }
        return {
            isValid: Object.keys(errors).length === 0,
            errors,
        };
    }
}
