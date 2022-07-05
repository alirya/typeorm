import {EntityMetadata} from "typeorm";
import Generate, {GenerateQuery} from "./generate";
import CloneRecursive from "@alirya/object/clone-recursive";

export default function Clone<Generated extends Generate>(generated: Generated) : Generated {

    const clone : Generated = new Map<EntityMetadata, GenerateQuery[]>() as any;

    for (const [entity, generates] of generated) {

        clone.set(entity, generates.map(CloneRecursive))
    }

    return clone;
}

