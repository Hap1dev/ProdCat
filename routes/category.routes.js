import { Router } from 'express';
import {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  getAddCategoryForm,
  getEditCategoryForm
} from '../controllers/category.controller.js';

const router = Router();

router.get('/', getCategories);
router.get('/add', getAddCategoryForm);
router.get('/:id', getCategory);
router.get('/edit/:id', getEditCategoryForm);
router.post('/', createCategory);
router.post('/:id/update', updateCategory);
router.post('/:id/delete', deleteCategory);


export default router;