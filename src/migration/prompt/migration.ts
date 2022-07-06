import OperationType from './operation/operation';
import ExecutionMigration from './execution/migration';
import {DataSource} from 'typeorm/data-source/DataSource';
import {EntitySchema} from 'typeorm/entity-schema/EntitySchema';
import Callable from '../../../../function/dist/callable';
import Identity from '../../../../function/dist/identity';
import NoOp from '../../../../function/dist/no-op';
import Prompt from './prompt';
import Const from '../../../../function/dist/const';

export default function Migration(
    connection : DataSource,
    entities : Map<Function | string | EntitySchema, string>,
    path : Callable<[string], string> = Identity,
    log : Callable<[string], void> = NoOp,
    extension : string = 'ts',
) : Promise<OperationType> {

    return Prompt().then((data :  OperationType)=>{

        return ExecutionMigration(data, connection, entities, path, log, extension)
            .then(Const(data));
    });
}