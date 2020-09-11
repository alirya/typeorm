import Class from "@dikac/t-class/class";
import {QueryBuilder} from "typeorm";
import Name from "@dikac/t-object/string/name";
import Sentences from "@dikac/t-string/message/sentences";

export default function AliasNotFound(
    valid : boolean,
    builder : QueryBuilder<any>,
    alias : string,
    entity ?: Class<object, any[]>,
) {

    let sentence = new Sentences(valid);
    sentence.subject.push('alias', `"${alias}"`);

    if(entity) {

        sentence.subject.push('for entity', `"${Name(entity)}"`);
    }

    sentence.accept = [];
    sentence.reject = ['not'];

    sentence.expect.push('found in', `"${Name(builder)}"`);

    return sentence.message;
}
