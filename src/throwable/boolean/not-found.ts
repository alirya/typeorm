import {EntityNotFoundError} from "typeorm/error/EntityNotFoundError";

export default function NotFound(value : object) : value is EntityNotFoundError {

    return value instanceof EntityNotFoundError;
}
