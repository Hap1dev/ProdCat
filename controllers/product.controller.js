import * as productService from '../services/product.service.js';
import * as categoryRepository from '../repository/category.repository.js';

export const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const products = await productService.getProducts(page);
    const totalPages = await productService.getTotalPages();

    res.render('products/index', {
      products,
      currentPage: page,
      totalPages,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getAddProductForm = async (req, res) => {
  try {
    const categories = await categoryRepository.findMany();
    res.render('products/add', { categories });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getEditProductForm = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.getEditProductForm(id);
    const categories = await categoryRepository.findMany();
    res.render('products/edit', { product, categories });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, categoryId } = req.body;
    await productService.createProduct(name, categoryId);
    res.redirect('/products');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, categoryId } = req.body;
    await productService.updateProduct(id, name, categoryId);
    res.redirect('/products');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productService.deleteProduct(id);
    res.redirect('/products');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
