import express from "express";
import * as ticketController from "../controllers/ticketController.js";

const router = express.Router();

router.route('/tickets')
  .post(ticketController.create)
  .get(ticketController.read)

router
  .route("/tickets/:id")
    .get(ticketController.readById)
    .put(ticketController.update)
    .delete(ticketController.remove)
  

export default router;