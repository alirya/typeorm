import {FindOperator} from 'typeorm/find-options/FindOperator.js';

/**
 * Used for find operations.
 */
type FindConditions<T> = {
    [P in keyof T] : FindConditions<T[P]> | FindOperator<FindConditions<T[P]>> | T[P];
};

export default FindConditions;
