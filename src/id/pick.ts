import Id from "./id";

export default function Pick<IdType extends Id>(object : IdType) : Pick<IdType, 'id'> {

    return {id:object.id};
}
