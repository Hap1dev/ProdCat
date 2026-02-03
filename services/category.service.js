import * as categoryRepository from '../repository/category.repository.js';
import * as productRepository from '../repository/product.repository.js';

export const getCategories = () => {
  return categoryRepository.findMany();
};

export const getCategory = (id) => {
  return categoryRepository.findUnique(id);
};

export const createCategory = (name) => {
  return categoryRepository.create(name);
};

export const updateCategory = (id, name) => {
  return categoryRepository.update(id, name);
};

export const deleteCategory = async (id, newCategoryId) => {
    const productCount = await productRepository.countByCategoryId(id);

    if (productCount > 0) {
      if (newCategoryId) {
        await productRepository.updateManyByCategoryId(id, newCategoryId);
        return categoryRepository.deleteCategory(id);
      } else {
        return { requiresReplacement: true };
      }
    } else {
      return categoryRepository.deleteCategory(id);
    }
};
