import {EntityNotFoundError} from 'typeorm/error/EntityNotFoundError.js';

export default function NotFound(value : object) : value is EntityNotFoundError {

    return value instanceof EntityNotFoundError;
}
