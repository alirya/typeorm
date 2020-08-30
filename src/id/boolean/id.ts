import TypeObject from "@dikac/t-object/boolean/object";
import TypeNumber from "@dikac/t-number/boolean/number";
import EntityId from "../id";
import {Required} from "utility-types";

export default function Id<Extension extends EntityId = EntityId>(value : any)  : value is Required<Extension, 'id'> {

    if(!TypeObject<Required<Extension, 'id'>>(value)) {

        return false;
    }

    // @ts-ignore
    if(!TypeNumber(value.id)) {

        return false;
    }

    // @ts-ignore
    if(!isFinite(value.id)) {

        return false;
    }

    return true;
}
