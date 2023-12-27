import LimitedRange from "../../../../../dist/date/range/validator/difference.js";
import {LowerParameters} from '@axiona/number/validator/lower.js';
import LowerString from '@axiona/number/assert/string/lower.js';
import Validators from '@axiona/validator/simple.js';
import moment from "moment";


it('force console log', () => { spyOn(console, 'log').and.callThrough();});


describe('insert test', () => {

    const validator = LimitedRange(
        'days',
        LowerParameters(
            5,
            true,
            (value, valid, maximum, inclusive ) => LowerString.Parameters(value, valid, maximum, inclusive, 'days difference')
        ) as Validators<number, number>
    )

    it('check equal', ()=>{

        const validatable = validator({
            from : moment().subtract(5, "days").toDate(),
            to : moment().toDate(),
        });

        expect(validatable.valid).toBeTrue();
    });

    it('check lower', ()=>{

        const validatable = validator({
            from : moment().subtract(4, "days").toDate(),
            to : moment().toDate(),
        });

        expect(validatable.valid).toBeTrue();
    });

    it('check higher', ()=>{

        const validatable = validator({
            from : moment().subtract(6, "days").toDate(),
            to : moment().toDate(),
        });

        expect(validatable.valid).toBeFalse();
        expect(validatable.message).toBe('days difference must lower or equal than "5", actual "6".');
    });

})
