import {PrimaryColumn} from 'typeorm';
import Id from './id.js';

/**
 * integer primary
 */
export class StringVarcharClass implements Id<string> {

    @PrimaryColumn({type:"varchar", nullable:false})
    id ?: string;
}

/**
 * integer primary
 */
export class StringClass implements Id<string> {

    @PrimaryColumn({type:"text", nullable:false})
    id ?: string;
}

export default function String() : { new () : Id<string> }
export default function String(type : 'varchar') : { new () : Id<string> }
export default function String(type : 'text') : { new () : Id<string> }
export default function String(type : 'text'|'varchar' = 'varchar') {

    switch (type) {
        case 'varchar' : return StringVarcharClass;
        case 'text' : return StringClass;
    }

}


