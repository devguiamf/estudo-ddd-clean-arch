import { ValidationEntity } from "../validation-entity";
import {describe, expect, it} from '@jest/globals';

describe("ValidationEntity", () => {
    class StubValidationEntity extends ValidationEntity {
        validate(): { field: string; messages: string[]; }[] {
            return [];
        }
    }

    it("should add validate error", () => {
        const validationEntity = new StubValidationEntity();
        validationEntity.addValidateError("field", ["error"]);
        expect(validationEntity.validateErrors).toEqual([{ field: "field", messages: ["error"] }]);
    });

    it("should clear validate errors", () => {
        const validationEntity = new StubValidationEntity();
        validationEntity.addValidateError("field", ["error"]);
        validationEntity.clearValidateErrors();
        expect(validationEntity.validateErrors).toEqual([]);
    });

    it("should return validate errors", () => {
        const validationEntity = new StubValidationEntity();
        validationEntity.addValidateError("field", ["error"]);
        expect(validationEntity.validateErrors).toEqual([{ field: "field", messages: ["error"] }]);
    });
});