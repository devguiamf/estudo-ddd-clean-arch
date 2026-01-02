import { IsEmail, IsNotEmpty, IsString, validate, Validator, ValidatorConstraintInterface } from "class-validator";
import { ValidationEntity } from "../../../common/validation/validation-entity";
import { UserProps } from "../entity/user.entity";
import { plainToInstance } from "class-transformer";

export class UserValidate extends ValidationEntity {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  constructor(private readonly props: Readonly<Required<UserProps>>) {
    super();
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
  }

  async validate(): Promise<{ field: string; messages: string[]; }[]> {
    const instance = plainToInstance(UserValidate, this.props);
    const errors = await validate(instance);
    if (errors.length > 0) {
      return errors.map((error) => ({
        field: error.property,
        messages: Object.values(error.constraints || {}),
      }));
    }
    return [];
  }
}
