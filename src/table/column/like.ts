import Value from "./value";
import Table from "../table";
import Infer from "../entity/infer";
import Padding from "@dikac/t-string/padding/padding";
import AffixCharacter from "@dikac/t-string/affix-character";

export default class Like<Entity extends Table = Table> extends Value<Entity, string> {

    constructor(
        argument : Entity,
        column : keyof Infer<Entity>,
        value : string,
        padding : Padding|undefined
    ) {

        if(padding) {

            value = AffixCharacter(value, '%', padding);
        }

        super(argument, column, value);
    }

    get query() : string {

        return `${this.column} LIKE :${this.parameter}`;
    }
}
