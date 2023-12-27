import {EntityNotFoundError} from 'typeorm/error/EntityNotFoundError.js';
import Name from "@axiona/object/string/name.js";

export default function NotFound(value : object) : value is EntityNotFoundError {

    if(value instanceof EntityNotFoundError) {

        return true;
    }

    if(Name(value) === 'EntityNotFoundError') {

        return true;
    }

    return false;
}
