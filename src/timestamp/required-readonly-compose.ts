import Timestamp from './timestamp';
import RequiredReadonly from './required-readonly';
import SetGetterCallbackParameters from "@alirya/object/set-getter-callback-parameters";



export default function RequiredReadonlyCompose<Destination extends Timestamp>(destination : Destination, target : Timestamp) : RequiredReadonly {

    SetGetterCallbackParameters(destination, 'created', function () {

        if(!target.created) {
            // TODO IMPROVE MESSAGE
            throw new Error('created is not provided');
        }

        return target.created;
    });

    SetGetterCallbackParameters(destination, 'updated', function () {

        if(!target.updated) {
            // TODO IMPROVE MESSAGE
            throw new Error('updated is not provided');
        }

        return target.updated;
    });

    return target as RequiredReadonly;
}

