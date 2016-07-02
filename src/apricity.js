export default class Apricity {

    constructor(rule) {
        this._id = 0;
        this._rules = [];
        this._master = null;

        if (rule) {
            this.addRule(rule);
        }
    }

    addRule(rule) {
        if (!rule) {
            throw Error("No rule entered.");
        }

        let result = false;
        if (typeof rule === 'string') {
            let processed = this._stringPreprocess(rule);
            let newId = this._id++;
            processed.id = newId;
            result = newId;
            this._rules.push(processed);
        }

        this._defineMasterRule();

        return result;

    }

    getRule(id) {
        let result = false;
        this._rules.forEach((rule) => {
            if (rule.id === id) {
                result = rule;
            }
        });
        return result;
    }

    getMaster() {
        return this._master;
    }

    removeRule(id) {

    }

    /**
    * Fetch a series of dates for the next executions.
    **/
    getNext(count) {
        count = count || 1;
    }

    /**
    * Scan each rule to build a master based on actual coverage.
    **/
    _defineMasterRule() {

        let master = {
            min: null, hour: null, day: null, month: null, week: null
        };

        this._master = master;

    }

    /**
    * We need to manipulate the string into an object before continuing.
    **/
    _stringPreprocess(rule) {

        let res = rule.split(" ");

        if (res.length !== 5) {
            throw Error("Invalid input.");
        }

        return {
            min: res[0],
            hour: res[1],
            day:  res[2],
            month: res[3],
            week: res[4]
        }
    }

}
