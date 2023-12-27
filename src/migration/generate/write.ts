import {promises as Fs} from "fs";
import {dirname} from "path";
import Generate from './generate.js';
import Callable from "@axiona/function/callable.js";
import Class from "@axiona/class/class.js";
import Clone from './clone.js';
import Identity from "@axiona/function/identity.js";
import NoOp from "@axiona/function/no-op.js";

/**
 * Write {@param generate} to file
 *
 * @param generate
 *
 * @param directory
 * directory resolution for entity
 *
 * @param path
 * path filter for absolute path
 *
 * @param log
 */
export default async function Write<Type extends Class>(
    generate: Generate,
    directory : Callable<[Type], string>,
    path : Callable<[string], string> = Identity,
    log : Callable<[string], void> = NoOp
) : Promise<Generate<{absolute:string}>> {

    generate = Clone(generate);

    for (const [entity, values] of generate) {

            const dir = directory(entity.target as Type);

        for (const value of values) {

            const absolute = path(`${dir}/${value.filename}`);
            const absoluteDir = dirname(absolute);
            Object.assign(value, {absolute});

            await Fs.mkdir(absoluteDir, {recursive:true});
            await Fs.writeFile(absolute, value.code);

            log(`generating ${value.name} to ${absolute}`);
        }
    }

    return generate as Generate<{absolute:string}>;
}

