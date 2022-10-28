import express  from "express";
import * as itemController from '../controllers/itemController.js';
import {createItemValidator} from '../middlewares/createItemValidator.js'


const router = express.Router();

/**
 * Todas las rutas que queramos de item
 */

router
  .route("/items")
  .post(createItemValidator, itemController.create)
  .get(itemController.read);

router
  .route("/items/:id")
  .get(itemController.readOne)
  .put(itemController.update);
  
// router.route('/items/:id').put(
//     itemController.update
// )
router.route('/items/:id').delete(
    itemController.remove
)

export default router;