import ValidatorInterface from '@alirya/validator/validator';
import {ObjectParameters} from '@alirya/object/validator/object';
import {ValuePartialParameters} from '@alirya/array/validator/value-partial';
import {AndParameters} from '@alirya/array/validatable/and';
import InvalidMessageMap from '@alirya/array/message/message/list/invalid';
import {EnumParameters} from '@alirya/enum/validator/enum';
import EnumOrder from '../mode';

export default function Mode() : ValidatorInterface<any, number> {

    let validator : ValidatorInterface<any, number>[] = [
        ObjectParameters()  as ValidatorInterface<any, number>,
        EnumParameters(EnumOrder)  as ValidatorInterface<number, number>
    ];

    return ValuePartialParameters(validator, AndParameters, InvalidMessageMap);

}
