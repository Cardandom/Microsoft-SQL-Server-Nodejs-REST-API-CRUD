import sql from "mssql";

const dbSettings = {
  user: "CARLOS",
  password: "Tequieromucho1",
  server: "localhost",
  database: "webstore",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export async function getConection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error);
  }
}

