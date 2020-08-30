export default function ExpandRelation(relation : string) : string[] {

    let list = relation.split('.');
    let length = list.length;

    let adds : string[] = [];

    for (let i = 1; i <= length; i++) {

        adds.push(list.slice(0, i).join('.'));
    }

    return adds;
}
