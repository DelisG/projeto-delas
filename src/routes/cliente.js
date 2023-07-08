import express from "express";
import ClienteController from "../controllers/clienteController.js";

const router = express.Router();

router
  .get("/", ClienteController.getAllClientes)
  .post("/", ClienteController.createClientes)
  .put("/:id", ClienteController.updateClientes)
  .delete("/:id", ClienteController.deleteClientes)
  .get("/:id", ClienteController.getByIdClientes);

export default router;
