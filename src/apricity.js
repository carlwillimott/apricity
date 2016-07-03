export default class Apricity {

    constructor(rule) {
        this._id = 0;
        this._rules = [];
        this._master = null;
        this._refs = this._getRefs();

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
            processed.raw = rule;
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

        this._rules.forEach((rule) => {
            master.min = this._calculateMin(master.min, rule.min);
            master.hour = this._calculateHour(master.hour, rule.hour);
            master.day = this._calculateDay(master.day, rule.day);
            master.month = this._calculateMonth(master.month, rule.month);
            master.week = this._calculateWeek(master.week, rule.week);
        });

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

    _calculateMin(current, latest) {

    }

    _calculateHour(current, latest) {

    }

    _calculateDay(current, latest) {

    }

    _calculateMonth(current, latest) {

    }

    _calculateWeek(current, latest) {
        // 0 - Sun, 1 - Mon, 2 - Tue, 3 - Wed, 4 - Thu, 5 - Fri, 6 - Sat
        let week = current || {
            "0": false, "1": false, "2": false, "3": false,
            "4": false, "5": false, "6": false
        };

        if (latest.indexOf("*") > -1) {
            week = this._starMatcher(latest, week);
        }

        if (latest.indexOf(",") > -1) {
            week = this._seriesMatcher(latest, week);
        }

        if (latest.indexOf("-") > -1) {
            week = this._rangeMatcher(latest, week);
        }

        return week;

    }

    _starMatcher(latest, target) {
        for (let i = 0; i <= Object.keys(target).length; i++) {
            target[i] = true;
        }
        return target;
    }

    _seriesMatcher(latest, target) {
        let pieces = latest.split(",");
        pieces.forEach((piece) => {
            if (target.hasOwnProperty(piece)) {
                target[piece] = true;
            }
        });
        return target;
    }

    _rangeMatcher(latest, target) {
        let pieces = latest.split("-");
        let start = pieces[0];
        let end = pieces[1];
        for (let i = start; i <= end; i++) {
            if (target.hasOwnProperty(i)) {
                target[i] = true;
            }
        }
        return target;
    }

    /**
     * Internal reference function for text based representations of values.
    **/
    _getRefs() {
        return {
            'month': {
                'JAN': 1, 'FEB': 2, 'MAR': 3, 'APR': 4,
                'MAY': 5, 'JUN': 6, 'JUL': 7, 'AUG': 8,
                'SEP': 9, 'OCT': 10, 'NOV': 11, 'DEC': 12
            },
            'week': {
                'SUN': 0, 'MON': 1, 'TUE': 2, 'WED': 3,
                'THU': 4, 'FRI': 5, 'SAT': 6
            }
        }

    }

}
