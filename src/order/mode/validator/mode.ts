import ValidatorInterface from '@axiona/validator/validator.js';
import {ObjectParameters} from '@axiona/object/validator/object.js';
import {ValuePartialParameters} from '@axiona/array/validator/value-partial.js';
import {AndParameters} from '@axiona/array/validatable/and.js';
import InvalidMessageMap from '@axiona/array/message/message/list/invalid.js';
import {EnumParameters} from '@axiona/enum/validator/enum.js';
import EnumOrder from '../mode.js';

export default function Mode() : ValidatorInterface<any, number> {

    const validator : ValidatorInterface<any, number>[] = [
        ObjectParameters()  as ValidatorInterface<any, number>,
        EnumParameters(EnumOrder)  as ValidatorInterface<number, number>
    ];

    return ValuePartialParameters(validator, AndParameters, InvalidMessageMap);

}

export {Mode as OrderModeValidator}
