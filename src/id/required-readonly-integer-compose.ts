import SetGetterCallbackParameters from "@alirya/object/set-getter-callback-parameters";
import Id from "./id";
import EnsureNumber from "@alirya/number/ensure/number";



export default function RequiredReadonlyIntegerCompose<Destination extends Id>(destination : Destination, target : Id) : Id {

    SetGetterCallbackParameters(destination, 'id', function () {

        return  EnsureNumber(target.id, ()=>new Error('id is not provided'));
    });

    return target;
}

