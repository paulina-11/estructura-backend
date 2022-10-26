import express from "express";
import * as userController from "../controllers/userContoller.js";

const router = express.Router();


router.route("/users").post(userController.create).get(userController.read);
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

