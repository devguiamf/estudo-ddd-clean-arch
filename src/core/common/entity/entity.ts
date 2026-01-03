import { ValidationEntity } from "../validation/validation-entity";

export type ValidateErrorsMessage = { field: string, messages: string[] }[];


class DefaultValidationEntity extends ValidationEntity {
    
    validate(): ValidateErrorsMessage {
        return [
            {
                field: "entity",
                messages: ["Validation class is not implemented."],
            }
        ]
    }
}

export abstract class Entity<TProps> {
    private _id: string; // TODO: Criar uma classe abstrata que represente o id de uma entidade
    protected props: TProps;
    protected validation: ValidationEntity = new DefaultValidationEntity();

    constructor(id: string, props: TProps) {
        this._id = id;
        this.props = props;
    }

    get id(): string {
        return this._id;
    }

    get validateErrors(): ValidateErrorsMessage {
        return this.validation.validateErrors;
    }

    validate(): ValidateErrorsMessage {
        return this.validation.validate();
    }

    toJSON(): TProps {
        return {
            ...this.props,
            id: this._id,
        };
    }
}