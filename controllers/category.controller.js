import * as categoryService from '../services/category.service.js';

export const getCategories = async (req, res) => {
  try {
    const categories = await categoryService.getCategories();
    res.render('categories/index', { categories });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getAddCategoryForm = (req, res) => {
  res.render('categories/add');
};

export const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryService.getCategory(id);
    res.render('categories/edit', { category });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getEditCategoryForm = async (req, res) => {
    try {
      const { id } = req.params;
      const category = await categoryService.getCategory(id);
      res.render('categories/edit', { category });
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    await categoryService.createCategory(name);
    res.redirect('/categories');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    await categoryService.updateCategory(id, name);
    res.redirect('/categories');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { newCategoryId } = req.body;

    const result = await categoryService.deleteCategory(id, newCategoryId);

    if (result && result.requiresReplacement) {
      const category = await categoryService.getCategory(id);
      const categories = await categoryService.getCategories();
      res.render('categories/delete', { category, categories });
    } else {
      res.redirect('/categories');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
