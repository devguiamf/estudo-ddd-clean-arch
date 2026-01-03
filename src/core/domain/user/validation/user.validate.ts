import { IsEmail, IsNotEmpty, IsString, validateSync } from "class-validator";
import { ValidationEntity } from "../../../common/validation/validation-entity";
import { UserProps } from "../entity/user.entity";

export class UserValidate extends ValidationEntity {
  @IsNotEmpty({ message: "name não pode ser vazio" })
  @IsString({ message: "name deve ser uma string", always: false })
  name: string;

  @IsNotEmpty({ message: "email não pode ser vazio" })
  @IsEmail({}, { message: "email deve ser um email válido", always: false })
  email: string;

  @IsNotEmpty({ message: "password não pode ser vazio" })
  @IsString({ message: "password deve ser uma string", always: false })
  password: string;

  constructor(private readonly props: UserProps) {
    super();
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
  }

  validate(): { field: string; messages: string[] }[] {
    this.clearValidateErrors();

    const errors = validateSync(this);

    if (errors.length > 0) {
      errors.forEach((error) => {
        this.addValidateError(
          error.property,
          Object.values(error.constraints || {})
        );
      });
    }
    return this.validateErrors;
  }
}
