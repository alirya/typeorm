import {PropertyLazyStaticParameters} from "@alirya/object/property-lazy-static";
import Id from "./id";
import EnsureNumber from "@alirya/number/ensure/number";



export default function RequiredReadonlyIntegerCompose<Destination extends Id>(destination : Destination, target : Id) : Id {

    PropertyLazyStaticParameters(destination, 'id', function () {

        return  EnsureNumber(target.id, ()=>new Error('id is not provided'));
    }, false);

    return target;
}

