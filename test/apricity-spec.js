import Apricity from '../lib/apricity.js';

describe("apricitySpec", () => {

    it("should throw an error if addRule doesn't have any params", () => {
        const c1 = new Apricity();
        expect(() => c1.addRule()).toThrow();
        expect(() => c1.addRule("")).toThrow();

        // @todo - Should test if not string also.

    });

    it("should throw an error if the entered rule is not in 5 parts", () => {

        expect(() => new Apricity("* * * *")).toThrow();
        expect(() => new Apricity("* * * * * *")).toThrow();

        const c1 = new Apricity();
        expect(() => c1.addRule("* * * *")).toThrow();

        const c2 = new Apricity();
        expect(() => c2.addRule("* * * * * *")).toThrow();

    });

    it("should be able to fetch a record", () => {
        const c1 = new Apricity("* * * * *");
        let v1 = 0;
        let r1 = c1.getRule(v1);
        let v2 = c1.addRule("* * * * *");
        let r2 = c1.getRule(v2);
        expect(r1.id).toEqual(v1);
        expect(r2.id).toEqual(v2);
    });

});
