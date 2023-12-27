import Question from "@axiona/prompt/question/question.js";
import Drivers from '../../../database/array/types.js';
import {DatabaseType} from "typeorm";
import Questions from "@axiona/prompt/questions/questions.js";
import {DataSourceOptions} from "typeorm";

export type VendorType = Pick<DataSourceOptions, 'type'>;

export default class Vendor implements Questions<VendorType>/*Mapper<Pick<Config, 'type'>>*/ {

    public type : Question = {
        type: 'select',
        message: 'vendor?',
        choices: [],
        initial :  0
    }

    constructor(drivers: ReadonlyArray<DatabaseType> = Drivers) {

        this.type.choices = drivers.map(value=>{
            return { title: value, value: value }
        })
    }


}
