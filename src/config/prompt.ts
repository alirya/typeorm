import Prompts from "prompts";
import Config from "./config";
import VendorQuestion, {VendorType} from "./prompt/questions/vendor";
import FromQuestion from "@alirya/prompt/prompt-object/array/from-question";
import FilterMissing from "@alirya/prompt/prompt-object/array/filter-missing";
import Vendor from "./prompt/vendor";
import {DatabaseType} from "typeorm";
import Drivers from "../database/array/types";
import Create from "./create";

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
