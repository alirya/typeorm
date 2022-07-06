import Class from '@alirya/class/class.js';
import {QueryBuilder} from 'typeorm';
import Name from '@alirya/object/string/name.js';
import {TemplateParameter} from '@alirya/string/function/template.js';

type Argument = Record<'entity'|'alias'|'predicate'|'builder', string>;

const template = TemplateParameter<Argument>({
    string : 'entity {entity} {alias} {predicate} found in {builder}.',
    callback : (string)=>string.replace(/ +/g, ' ')
});

export default function EntityNotFound(
    valid : boolean,
    entity : Class<object, any[]>,
    builder : QueryBuilder<any>,
    alias ?: string
) {

    const argument : Partial<Argument> = {
        entity : `"${Name(entity)}"`,
        predicate : valid ? '' : 'not',
        builder : `"${Name(builder)}"`
    };

    if(alias) {

        argument.alias = `with alias ${alias}}`;
    }

    return template(argument);

}
