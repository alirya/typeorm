import {PrimaryColumn} from 'typeorm';
import Id from './id.js';

/**
 * integer primary
 */
export  class IntegerClass implements Id<number> {

    @PrimaryColumn({nullable: false, type: 'int', unsigned: true})
    id ?: number;
}

/**
 * integer primary
 */
export  class IntegerBigClass implements Id<number|string> {

    @PrimaryColumn({nullable: false, type: 'bigint', unsigned: true})
    id ?: number|string;
}

export default function Integer() : { new () : Id<number|string> }
export default function Integer(type : 'int') : { new () : Id<number> }
export default function Integer(type : 'bigint') : { new () : Id<number|string> }
export default function Integer(type : 'bigint'|'int' = 'bigint') {

    switch (type) {
        case 'int' : return IntegerClass;
        case 'bigint' : return IntegerBigClass;
    }

}
