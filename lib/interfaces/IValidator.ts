export interface ValidationResult {
    isValid: boolean;
    errors: Record<string, string>;
}

export interface IValidator<T> {
    validate(data: T): ValidationResult;
}
