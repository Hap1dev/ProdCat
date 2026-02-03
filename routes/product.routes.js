import { Router } from 'express';
import {
  getProducts,
  getAddProductForm,
  getEditProductForm,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller.js';

const router = Router();

router.get('/', getProducts);
router.get('/add', getAddProductForm);
router.get('/edit/:id', getEditProductForm);
router.post('/', createProduct);
router.post('/:id/update', updateProduct);
router.post('/:id/delete', deleteProduct);

export default router;