import express from "express";
import EmpreendedoraController from "../controllers/empreendedoraController.js";

const router = express.Router();

router
    .get("/", EmpreendedoraController.getAllEmpreendedoras)
    .post("/", EmpreendedoraController.createEmpreendedoras)
    .put("/:id", EmpreendedoraController.updateEmpreendedoras)
    .delete("/:id", EmpreendedoraController.deleteEmpreendedoras)
    .get("/:id", EmpreendedoraController.getByIdEmpreendedoras)
    
export default router;