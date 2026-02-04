import * as productRepository from '../repository/product.repository.js';
import * as categoryRepository from '../repository/category.repository.js';

export const getProducts = (page, search, categoryId) => {
    const pageSize = 10;
    const skip = (page - 1) * pageSize;
    return productRepository.findMany(skip, pageSize, search, categoryId);
};

export const getTotalPages = async (search, categoryId) => {
    const pageSize = 10;
    const totalProducts = await productRepository.count(search, categoryId);
    return Math.ceil(totalProducts / pageSize);
}

export const getAddProductForm = () => {
    return categoryRepository.findMany();
};

export const getEditProductForm = (id) => {
    return productRepository.findUnique(id);
};

export const createProduct = (name, categoryId) => {
    return productRepository.create(name, categoryId);
};

export const updateProduct = (id, name, categoryId) => {
    return productRepository.update(id, name, categoryId);
};

export const deleteProduct = (id) => {
    return productRepository.deleteProduct(id);
};