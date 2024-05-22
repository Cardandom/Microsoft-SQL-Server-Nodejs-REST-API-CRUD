import {getConection} from '../database/connection'

export const getProducts = async (req, res) => {
    const pool = await getConection();
    const result = await pool.request().query('SELECT * FROM Products');

    console.log(result)

    res.json(result.recordset);
};