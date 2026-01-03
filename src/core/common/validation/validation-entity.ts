export abstract class ValidationEntity {
    private _validateErrors: { field: string, messages: string[] }[] = [];

    get validateErrors(): { field: string, messages: string[] }[] {
        return this._validateErrors;
    }

    addValidateError(field: string, messages: string[]): void {
        this._validateErrors.push({ field, messages: [...messages] });
    }

    clearValidateErrors(): void {
        this._validateErrors = [];
    }

    abstract validate(): { field: string, messages: string[] }[];
}