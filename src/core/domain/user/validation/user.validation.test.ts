import { UserEntity } from "../entity/user.entity";
import {describe, expect, it} from '@jest/globals';

const emailErrorMessages = "email deve ser um email válido";
const passwordErrorMessages = "password não pode ser vazio";
const nameErrorMessages = "name não pode ser vazio";

describe("UserValidation", () => {
    it("should validate user", () => {
        const user = new UserEntity("1", {
            name: "John Doe",
            email: "john.doe@example.com",
            password: "123456",
        });

        const errors = user.validate();
        expect(errors).toEqual([]);
    });

    it("should validate user with invalid email", () => {
        const user = new UserEntity("1", {
            name: "John Doe",
            email: "john.doe.com",
            password: "123456",
        });
        expect(user.validate()).toEqual([{ field: "email", messages: [emailErrorMessages] }]);
    });

    it("should validate user with invalid password", () => {
        const user = new UserEntity("1", {
            name: "John Doe",
            email: "john.doe@example.com",
            password: "",
        });
        expect(user.validate()).toEqual([{ field: "password", messages: [passwordErrorMessages] }]);
    });

    it("should validate user with invalid name", () => {
        const user = new UserEntity("1", {
            name: "",
            email: "john.doe@example.com",
            password: "123456",
        });
        expect(user.validate()).toEqual([{ field: "name", messages: [nameErrorMessages] }]);
    });
}); 