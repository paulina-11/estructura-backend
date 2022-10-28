import express from "express";
import * as ticketController from "../controllers/ticketController.js";

const router = express.Router();

router.route('/')
  .post(ticketController.create)
  .get(ticketController.read)

router
  .route("/:id")
    .get(ticketController.readById)
    .put(ticketController.update)
    .delete(ticketController.remove)
  
    router
    .route("/:id/calculate")
          .put(ticketController.calculateById);

export default router;
