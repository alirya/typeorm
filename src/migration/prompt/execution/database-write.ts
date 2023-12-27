import Callable from "@axiona/function/callable.js";
import GenerateType from '../../generate/generate.js';
import NoOp from "@axiona/function/no-op.js";
import Identity from "@axiona/function/identity.js";
import Database from '../../../database/database.js';
import Write from './write.js';

export default function DatabaseWrite(
    database : Database,
    path : Callable<[string], string> = Identity,
    log : Callable<[string], void> = NoOp,
    extension  = 'ts',
) : Promise<GenerateType> {

    return Write(database.connection, database.config.entities, path, log, extension)
}
