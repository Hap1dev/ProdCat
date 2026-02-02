import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
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
    const category = await prisma.category.findUnique({
      where: { id: parseInt(id) },
    });
    res.render('categories/edit', { category });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getEditCategoryForm = async (req, res) => {
    try {
      const { id } = req.params;
      const category = await prisma.category.findUnique({
        where: { id: parseInt(id) },
      });
      res.render('categories/edit', { category });
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    await prisma.category.create({
      data: { name },
    });
    res.redirect('/categories');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    await prisma.category.update({
      where: { id: parseInt(id) },
      data: { name },
    });
    res.redirect('/categories');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.category.delete({
      where: { id: parseInt(id) },
    });
    res.redirect('/categories');
  } catch (error) {
    res.status(500).send(error.message);
  }
};