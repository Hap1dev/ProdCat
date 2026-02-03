import prisma from '../prisma/client.js';

export const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = 10;
    const skip = (page - 1) * pageSize;

    const products = await prisma.product.findMany({
      skip,
      take: pageSize,
      include: {
        category: true,
      },
    });

    const totalProducts = await prisma.product.count();
    const totalPages = Math.ceil(totalProducts / pageSize);

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
    const categories = await prisma.category.findMany();
    res.render('products/add', { categories });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getEditProductForm = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: { id: parseInt(id) },
    });
    const categories = await prisma.category.findMany();
    res.render('products/edit', { product, categories });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, categoryId } = req.body;
    await prisma.product.create({
      data: {
        name,
        categoryId: parseInt(categoryId),
      },
    });
    res.redirect('/products');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, categoryId } = req.body;
    await prisma.product.update({
      where: { id: parseInt(id) },
      data: {
        name,
        categoryId: parseInt(categoryId),
      },
    });
    res.redirect('/products');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.product.delete({
      where: { id: parseInt(id) },
    });
    res.redirect('/products');
  } catch (error) {
    res.status(500).send(error.message);
  }
};