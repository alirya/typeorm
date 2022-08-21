import {__decorate, __metadata} from "tslib";
import Timestamp from "./timestamp";
import {CreateDateColumn, UpdateDateColumn} from 'typeorm';

export default function Compose<Type>(entity : { new (...args: any[]):  Type }) : { new (...args: any[]):  Type } & typeof Timestamp {

    __decorate([
        CreateDateColumn(),
        __metadata("design:type", Date)
    ], entity.prototype, "created", void 0);

    __decorate([
        UpdateDateColumn(),
        __metadata("design:type", Date)
    ], entity.prototype, "updated", void 0);

    return entity;
}
