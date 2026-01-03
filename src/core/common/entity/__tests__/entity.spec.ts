import { Entity } from "../entity";
import {describe, expect, it} from '@jest/globals';

class StubEntity extends Entity<{ name: string }> {
    constructor(props: { name: string }) {
        super("1", props);
    }
}

describe("Entity", () => {

    it("should set props and id", () => {
        const entity = new StubEntity({ name: "John Doe" });
        expect(entity.id).toBe("1");
        expect(entity.toJSON()).toEqual({ id: "1", name: "John Doe" });
    });

    it("should validate errors when validation class is not implemented", async () => {
        const entity = new StubEntity({ name: "John Doe" });
        const errors = entity.validate();

        expect(errors).toEqual([
            {
                field: "entity",
                messages: ["Validation class is not implemented."],
            }
        ]);
    });
});