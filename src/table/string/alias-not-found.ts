import Class from '@alirya/class/class';
import {QueryBuilder} from 'typeorm';
import Name from '@alirya/object/string/name';
import TemplateParameter from '@alirya/string/function/template-parameter';

type Argument = Record<'entity'|'alias'|'predicate'|'builder', string>;

const template = TemplateParameter<Argument>({
    string : 'alias {alias} {predicate} found in {builder}.',
    callback : (string)=>string.replace(/ +/g, ' ')
});

export default function AliasNotFound(
    valid : boolean,
    builder : QueryBuilder<any>,
    alias : string,
    entity ?: Class<object, any[]>,
) {

    const argument : Partial<Argument> = {
        alias : `"${alias}"`,
        predicate : valid ? '' : 'not',
        builder : `"${Name(builder)}"`
    };

    if(entity) {

        argument.entity = `for entity "${Name(entity)}"`;
    }

    return template(argument);
}
