const { Router } = require('express');
const {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  getAddCategoryForm,
  getEditCategoryForm
} = require('../controllers/category.controller.js');

const router = Router();

router.get('/', getCategories);
router.get('/add', getAddCategoryForm);
router.get('/:id', getCategory);
router.get('/edit/:id', getEditCategoryForm);
router.post('/', createCategory);
router.post('/:id/update', updateCategory);
router.post('/:id/delete', deleteCategory);


module.exports = router;