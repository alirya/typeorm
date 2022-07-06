import Prompts from 'prompts';
import Config from './config.js';
import VendorQuestion, {VendorType} from './prompt/questions/vendor.js';
import FromQuestion from '@alirya/prompt/prompt-object/array/from-question.js';
import FilterMissing from '@alirya/prompt/prompt-object/array/filter-missing';
import Vendor from './prompt/vendor.js';
import {DatabaseType} from 'typeorm/driver/types/DatabaseType';
import Drivers from '../database/array/types.js';
import Create from './create.js';

export default function Prompt(
    initial : Partial<Config>|Promise<Partial<Config>> = {},
    // log : Callable<[string], void> = NoOp,
    drivers: ReadonlyArray<DatabaseType> = Drivers
) : Promise<Config> {

    return Promise.resolve(initial)
        .then(Create)
        .then(async (config : Partial<Config>)=>{

            const missings = FilterMissing(FromQuestion(new VendorQuestion(drivers)), config);

            // log("Database Configuration");

            const data = await Prompts(missings);

            return Object.assign(data, config);

        }).then((config : VendorType)=>{

            return Vendor(config);

        })/*.then(config=>{

           const standard = new Standard(config);

           return standard.connect().then(()=>config)

        }) as Promise<Config>*/;
}
