import { UpdateResult as OrmUpdateResult } from "typeorm/query-builder/result/UpdateResult";
export default function Updated(valid: boolean, result: OrmUpdateResult, expectation: number): string;
