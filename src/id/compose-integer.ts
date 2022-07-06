import {__decorate, __metadata} from 'tslib';
import {PrimaryColumn} from 'typeorm';
import Class from '@alirya/class/class';
import Integer from './integer';

export default function ComposeInteger<Type extends Class>(entity : Type) : Type & typeof Integer {

    __decorate([
        PrimaryColumn({ nullable: false, type: 'unsigned big int' }),
        __metadata('design:type', Number)
    ], entity.prototype, 'id', void 0);

    return entity;
}