import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());
const apiUrl = "https://api-cafeconaroma.onrender.com/products";
const port = process.env.PORT || 3000;

const readData = () => {
  try {
    const data = fs.readFileSync("db/db-coffee.json");
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};

const writeData = (data) => {
  try {
    fs.writeFileSync("db/db-coffee.json", JSON.stringify(data));
  } catch (error) {
    console.log(Error);
  }
};

app.get("/", (req, res) => {
  res.send("Bienvenidos a API cafe con aroma");
  /*  res.redirect("https://morales-dev.vercel.app/"); */
});

app.get("/products", (req, res) => {
  try {
    const response = readData();
    return res.json(response);
  } catch (error) {
    console.log("No esta leyendo la DB \n", error);
  }
});
/* Buscar */
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const response = readData();
  const coffee = response.products.find((item) => item._id === id);
  coffee !== undefined
    ? res.send(coffee)
    : res.send(`Coffee "${id}" not found `);
});
/* Crear */
app.post("/products/create", (req, res) => {
  const data = readData();
  const body = req.body;
  /*  const newCoffee = {
    id: data.products.length + 1,
    ...body,
  }; */
  data.products.push(body);
  writeData(data);
  res.json(body);
});
/* Actualizar */
app.put("/products/:id", (req, res) => {
  const data = readData();
  const body = req.body;
  const id = req.params.id;
  const coffeeIndex = data.products.findIndex((item) => item._id === id);
  if (coffeeIndex !== -1) {
    data.products[coffeeIndex] = {
      ...data.products[coffeeIndex],
      ...body,
    };
    writeData(data);
    return res.json({ message: `Coffee ${id} updated successfully` });
  }
  res.json({ message: `No found Coffee ${id}` });
});

app.delete("/products/remove/:id", (req, res) => {
  const data = readData();
  const id = parseInt(req.params.id);
  const coffeIndex = data.products.findIndex((item) => item._id === id);
  data.products.splice(coffeIndex, 1);
  writeData(data);
  res.json({ message: "Coffee deleted successfully" });
  if (condition) {
  }
});
app.listen(port, () => {
  console.log("Server on port", port);
});
