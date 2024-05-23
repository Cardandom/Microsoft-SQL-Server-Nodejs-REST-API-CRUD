export const queries = {
    getAllProduct : 'SELECT * FROM Products',
    addNewProduct : 'INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)'
}