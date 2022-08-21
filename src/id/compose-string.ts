import {__decorate, __metadata} from "tslib";
import {PrimaryColumn} from "typeorm";
import Id from "./id";

export default function ComposeString<Type>(entity : { new (...args: any[]):  Type }) : { new (...args: any[]):  Type } & { new () : Id<string> }
export default function ComposeString<Type>(entity : { new (...args: any[]):  Type }, type : 'varchar') : { new (...args: any[]):  Type } & { new () : Id<string> }
export default function ComposeString<Type>(entity : { new (...args: any[]):  Type }, type : 'string') : { new (...args: any[]):  Type } & { new () : Id<string> }
export default function ComposeString<Type>(
    entity : { new (...args: any[]):  Type },
    type : 'string'|'varchar' = 'string'
) : { new (...args: any[]):  Type } & { new () : Id<string> } {

    switch (type) {

        case "varchar":
            __decorate([
                PrimaryColumn({ type: "varchar", nullable: false }),
                __metadata("design:type", String)
            ], entity.prototype, "id", void 0);
        break;

        case "string":
            __decorate([
                PrimaryColumn({ type: "text", nullable: false }),
                __metadata("design:type", String)
            ], entity.prototype, "id", void 0);
        break;
    }

    return entity;
}
