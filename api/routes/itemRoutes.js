import express  from "express";
import * as itemController from '../controllers/itemController.js'

const router = express.Router();

/**
 * Todas las rutas que queramos de item
 */

router.route("/items")
  .post(itemController.create)
  .get(itemController.read);
// router.route('/items').get(
//     itemController.read
// )
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