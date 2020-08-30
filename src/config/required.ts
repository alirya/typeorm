import Config from "./config";
import {Required as UtilityRequired} from "utility-types";

type Required = UtilityRequired<Config, 'entities'|'subscribers'|'migrations'>;
export default Required;

