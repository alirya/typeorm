import {__decorate, __metadata} from 'tslib';
import {Column} from 'typeorm';
import Class from '@alirya/class/class';
import Timestamp from './timestamp';

export default function Compose<Type extends Class>(entity : Type) : Type & typeof Timestamp {

    __decorate([
        Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
        __metadata('design:type', Date)
    ], entity.prototype, 'created', void 0);

    __decorate([
        Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()' }),
        __metadata('design:type', Date)
    ], entity.prototype, 'updated', void 0);

    return entity;
}