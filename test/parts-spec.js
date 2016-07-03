import Apricity from '../lib/apricity';
import {setupOutput} from './helpers/functions';

describe("partsSpec", () => {

    it("should be able to calculate the week correctly", () => {

        let current1 = setupOutput(7);
        const c1 = new Apricity();
        const r1 = c1._calculateWeek(current1, "1-4");
        const e1 = {
            "0": false, "1": true, "2": true, "3": true,
            "4": true, "5": false, "6": false
        };
        expect(r1).toEqual(e1);

        let current2 = setupOutput(7);
        const c2 = new Apricity();
        const r2 = c2._calculateWeek(current2, "1,2,5,6");
        const e2 = {
            "0": false, "1": true, "2": true, "3": false,
            "4": false, "5": true, "6": true
        };
        expect(r2).toEqual(e2);

    });

});
