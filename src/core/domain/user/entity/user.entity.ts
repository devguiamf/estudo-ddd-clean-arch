import { Entity } from "../../../common/entity/entity";
import { UserValidate } from "../validation/user.validate";

export type UserProps = {
  name: string;
  email: string;
  password: string;
};

export class UserEntity extends Entity<UserProps> {
  protected readonly props: UserProps;
  protected readonly validation: UserValidate;

  constructor(id: string, props: UserProps) {
    super(id, props);
    this.props = props;
    this.validation = new UserValidate(this.toJSON());
  }
}
