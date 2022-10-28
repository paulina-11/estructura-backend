import express  from "express";
import * as itemController from '../controllers/itemController.js';
import {createItemValidator} from '../middlewares/createItemValidator.js'


const router = express.Router();

/**
 * Todas las rutas que queramos de item
 */

router
  .route("/")
  .post(createItemValidator, itemController.create)
  .get(itemController.read);

router
  .route("/:id")
  .get(itemController.readOne)
  .put(itemController.update)
  .delete(
    itemController.remove
)
  
// router.route('/items/:id').put(
//     itemController.update
// )

export default router;