import Class from "@dikac/t-class/class";
import {QueryBuilder} from "typeorm";
import Name from "@dikac/t-object/string/name";
import Sentences from "@dikac/t-string/message/sentences";

export default function EntityNotFound(
    valid : boolean,
    entity : Class<object, any[]>,
    builder : QueryBuilder<any>,
    alias ?: string
) {

    let sentence = new Sentences(valid);
    sentence.subject.push('entity', `"${Name(entity)}"`);

    if(alias) {

        sentence.subject.push('with alias', alias);
    }

    sentence.accept = [];
    sentence.reject = ['not'];

    sentence.expect.push('found in', `"${Name(builder)}"`);

    return sentence.message;
}
