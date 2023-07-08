import express from "express";
import index from "./routes/index.js";
import db from "./config/dbConecct.js";
import empreendedoras from "./routes/empreendedora.js";

const app = express();

app.use(express.json());
app.use("/", index);
app.use("empreendedoras", empreendedoras);

db.on("error", console.log.bind(console, "erro de conexão"));
db.on("open", () => {
  console.log("Conexão com banco feita com sucesso");
});
export default app;
