import ValidatorInterface from '@alirya/validator/validator.js';
import {ObjectParameters} from '@alirya/object/validator/object.js';
import {ValuePartialParameters} from '@alirya/array/validator/value-partial.js';
import {AndParameters} from '@alirya/array/validatable/and.js';
import InvalidMessageMap from '@alirya/array/message/message/list/invalid.js';
import {EnumParameters} from '@alirya/enum/validator/enum.js';
import EnumOrder from '../mode.js';

export default function Mode() : ValidatorInterface<any, number> {

    const validator : ValidatorInterface<any, number>[] = [
        ObjectParameters()  as ValidatorInterface<any, number>,
        EnumParameters(EnumOrder)  as ValidatorInterface<number, number>
    ];

    return ValuePartialParameters(validator, AndParameters, InvalidMessageMap);

}
