import { Pool } from 'pg'

export const pool = new Pool({
    host : 'localhost',
    user : 'postgres',
    password : '',
    database : 'distrilact_db',
    port :  5432
})