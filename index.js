import express from "express";
import fs from "fs";
const app = express();

const readData = () => {
  try {
    const data = fs.readFileSync("db/db-coffee.json");
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};

const writeData = () => {
  try {
    fs.writeFileSync("db/db-coffee.json", JSON.stringify(data));
  } catch (error) {
    console.log(Error);
  }
};

app.get("/", (req, res) => {
  res.send("Welcome to API Coffee");
});
app.get("/products", (req, res) => {
  const response = readData()
  return res.json(response.products);
});

app.listen(3000, () => {
  console.log("Server on port 3000");
});
