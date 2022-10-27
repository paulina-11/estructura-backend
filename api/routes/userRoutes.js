import express from "express";
import * as userController from "../controllers/userContoller.js";
import { createUserValidator } from "../middlewares/createUserValidator.js";

const router = express.Router();


router.route("/users")
// antes de llamar al controlador llamar al middelware
.post(createUserValidator, userController.create)
.get(userController.read);
// router.route('/items').get(
//     itemController.read
// )
router
  .route("/users/:id")
  .get(userController.readById)
  .put(userController.update);

// router.route('/items/:id').put(
//     itemController.update
// )
router.route("/users/:id")
  .delete(userController.remove);
export default router;

