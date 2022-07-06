import {__decorate, __metadata} from 'tslib';
import {PrimaryGeneratedColumn} from 'typeorm';
import Class from '@alirya/class/class';
import Automatic from './automatic';

export default function ComposeInteger<Type extends Class>(entity : Type) : Type & typeof Automatic {

    __decorate([
        PrimaryGeneratedColumn(),
        __metadata('design:type', Number)
    ], entity.prototype, 'id', void 0);

    return entity;
}