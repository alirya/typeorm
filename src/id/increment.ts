import {PrimaryGeneratedColumn} from 'typeorm';
import Id from './id.js';

/**
 * primary auto increment
 */

export class IncrementClassInteger implements Id<number> {

    @PrimaryGeneratedColumn("increment", {type:'int', unsigned:true})
    id ?: number;
}

export class IncrementClassBigInteger implements Id<number|string> {

    @PrimaryGeneratedColumn("increment", {type:'bigint', unsigned:true})
    id ?: number|string;
}

export default function Increment() : { new () : Id<number|string> }
export default function Increment(type : 'int') : { new () : Id<number> }
export default function Increment(type : 'bigint') : { new () : Id<number|string> }
export default function Increment(type : 'bigint'|'int' = 'bigint') {

    switch (type) {
        case 'int' : return IncrementClassInteger;
        case 'bigint' : return IncrementClassBigInteger;
    }

}

