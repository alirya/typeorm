import CreatedInterface from '../range.js';
import Validator from "@axiona/validator/simple.js";
import {DateRangeValidator} from "./range.js";
import  moment from "moment";
import {unitOfTime} from "moment";

export default function Difference(
    unit: unitOfTime.Diff,
    diffValidator : Validator<number, number>
) : Validator<object, CreatedInterface> {

    const validator = DateRangeValidator()

    return function (object: CreatedInterface)  {

        const validatable = validator(object)

        if(!validatable.valid) {

            return validatable
        }

        const {from, to} = validatable.value

        if(!from || !to) {

            return validatable
        }

        const diff = moment(to).diff(moment(from), 'days')

        return diffValidator(diff)


    } as Validator<object, CreatedInterface>
}

export {Difference as DateRangeDifferenceValidator}
