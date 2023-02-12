import Prompts from "prompts";
import Config from './config.js';
import VendorQuestion, {VendorType} from './prompt/questions/vendor.js';
import FromQuestion from "@alirya/prompt/prompt-object/array/from-question.js";
import FilterMissing from "@alirya/prompt/prompt-object/array/filter-missing.js";
import Vendor from './prompt/vendor.js';
import {DatabaseType} from "typeorm";
import Drivers from '../database/array/types.js';
import Create from './create.js';

export default function Prompt(
    initial : Partial<Config>|Promise<Partial<Config>> = {},
    drivers: ReadonlyArray<DatabaseType> = Drivers
) : Promise<Config> {

    return Promise.resolve(initial)
        .then(Create)
        .then(async (config : Partial<Config>)=>{

            const missings = FilterMissing(FromQuestion(new VendorQuestion(drivers)), config);

            const data = await Prompts(missings);

            return Object.assign(data, config);

        }).then((config : VendorType)=>{

            return Vendor(config)

        });
}
