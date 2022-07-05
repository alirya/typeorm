import {DatabaseType} from "typeorm/driver/types/DatabaseType";

const temp : Record<DatabaseType, null> = {
    mysql : null,
    postgres : null,
    cockroachdb : null,
    sap : null,
    mariadb : null,
    sqlite : null,
    cordova : null,
    nativescript : null,
    sqljs : null,
    oracle : null,
    mssql : null,
    mongodb : null,
    expo : null,
    capacitor : null,
    spanner : null,
    "react-native" : null,
    "aurora-mysql" : null,
    "aurora-postgres" : null,
    "better-sqlite3" : null,
};

const Types : ReadonlyArray<DatabaseType> = Object.keys(temp) as ReadonlyArray<DatabaseType>;

export default Types;