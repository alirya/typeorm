import Timestamp from './timestamp.js';
import RequiredReadonly from './required-readonly.js';
import {PropertyLazyStaticParameters} from "@alirya/object/property-lazy-static.js";


export default function RequiredReadonlyCompose<Destination extends Timestamp>(destination : Destination, target : Timestamp) : RequiredReadonly {

    PropertyLazyStaticParameters(destination, 'created', function () {

        if(!target.created) {
            // TODO IMPROVE MESSAGE
            throw new Error('created is not provided');
        }

        return target.created;
    }, false);

    PropertyLazyStaticParameters(destination, 'updated', function () {

        if(!target.updated) {
            // TODO IMPROVE MESSAGE
            throw new Error('updated is not provided');
        }

        return target.updated;
    }, false);

    return target as RequiredReadonly;
}

