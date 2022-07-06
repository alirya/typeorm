import Question from '@alirya/prompt/question/question';
import Drivers from '../../../database/array/types';
import {DatabaseType} from 'typeorm/driver/types/DatabaseType';
import Questions from '@alirya/prompt/questions/questions';
import {DataSourceOptions} from 'typeorm/data-source/DataSourceOptions';

export type VendorType = Pick<DataSourceOptions, 'type'>;

export default class Vendor implements Questions<VendorType>/*Mapper<Pick<Config, 'type'>>*/ {

    public type : Question = {
        type: 'select',
        message: 'vendor?',
        choices: [],
        initial :  0
    };

    constructor(drivers: ReadonlyArray<DatabaseType> = Drivers) {

        this.type.choices = drivers.map(value=>{
            return { title: value, value: value };
        });
    }


}
