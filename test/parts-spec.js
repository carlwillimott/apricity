import Apricity from '../lib/apricity.js';

const setupOutput = (count) => {
	let output = {};
	for (let i = 0; i <= count; count++) {
		output[i] = false;
	}
	return output;
};

describe("partsSpec", () => {

	xit("should be able to calculate the week correctly", () => {

		let current1 = setupOutput(7);

        const c1 = new Apricity();
		const r1 = c1._calculateWeek(current1, "1-4");

		const e1 = {
            "1": true, "2": true, "3": true, "4": true,
            "5": false, "6": false, "7": false
        };

		expect(r1).toEqual(e1);

    });

});
