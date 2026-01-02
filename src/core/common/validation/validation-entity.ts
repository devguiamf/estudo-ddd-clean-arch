export abstract class ValidationEntity {
    private _validateErrors: { field: string, messages: string[] }[] = [];

    get validateErrors(): { field: string, messages: string[] }[] {
        return this._validateErrors;
    }

    addValidateError(field: string, message: string): void {
        this._validateErrors.push({ field, messages: [message] });
    }

    clearValidateErrors(): void {
        this._validateErrors = [];
    }

    abstract validate(): Promise<{ field: string, messages: string[] }[]>;
}