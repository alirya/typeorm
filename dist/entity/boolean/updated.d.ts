import { UpdateResult as OrmUpdateResult } from "typeorm";
export default function Updated(result: OrmUpdateResult, expectation: number): boolean;
