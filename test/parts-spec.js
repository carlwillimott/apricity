import Apricity from '../lib/apricity';
import {setupOutput} from './helpers/functions';

describe("partsSpec", () => {

    it("should be able to calculate the week correctly", () => {

        let p1 = setupOutput(7);
        const c1 = new Apricity();
        const r1 = c1._calculateWeek(p1, "5");
        const e1 = {
            "0": false, "1": false, "2": false, "3": false,
            "4": false, "5": true, "6": false
        };
        expect(r1).toEqual(e1);

        let p2 = setupOutput(7);
        const c2 = new Apricity();
        const r2 = c2._calculateWeek(p2, "1-4");
        const e2 = {
            "0": false, "1": true, "2": true, "3": true,
            "4": true, "5": false, "6": false
        };
        expect(r2).toEqual(e2);

        let p3 = setupOutput(7);
        const c3 = new Apricity();
        const r3 = c3._calculateWeek(p3, "1,2,5,6");
        const e3 = {
            "0": false, "1": true, "2": true, "3": false,
            "4": false, "5": true, "6": true
        };
        expect(r3).toEqual(e3);

        let p4 = setupOutput(7);
        const c4 = new Apricity();
        const r4 = c4._calculateWeek(p4, "*");
        const e4 = {
            "0": true, "1": true, "2": true, "3": true,
            "4": true, "5": true, "6": true
        };
        expect(r4).toEqual(e4);

        // @todo - Text based week names.

    });

});
