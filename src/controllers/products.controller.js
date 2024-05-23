import { getConection, sql, queries } from "../database";

export const getProducts = async (req, res) => {
  try {
    const pool = await getConection();
    const result = await pool.request().query(queries.getAllProduct);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.mesagge);
  }
};

export const createNewProduct = async (req, res) => {
  const { name, description } = req.body;
  let { quantity } = req.body;

  if (name == null || description == null) {
    return res.status(400).json({ msg: "Bad Request, please fill al fields" });
  }

  if (quantity == null) quantity = 0;

  try{
  const pool = await getConection();

  await pool
    .request()
    .input("name", sql.VarChar, name)
    .input("description", sql.Text, description)
    .input("quantity", sql.Int, quantity)
    .query(
      queries.addNewProduct
    );

  res.json(name, description, quantity);
  }
  catch(error){
    res.status(500);
    res.send(error.mesagge);
  }
};
