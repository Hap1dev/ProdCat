import prisma from '../prisma/client.js';

export const findMany = (skip, take) => {
    return prisma.product.findMany({
        skip,
        take,
        include: {
            category: true,
        },
    });
};

export const count = () => {
    return prisma.product.count();
}

export const findUnique = (id) => {
    return prisma.product.findUnique({
        where: { id: parseInt(id) },
    });
};

export const create = (name, categoryId) => {
    return prisma.product.create({
        data: {
            name,
            categoryId: parseInt(categoryId),
        },
    });
};

export const update = (id, name, categoryId) => {
    return prisma.product.update({
        where: { id: parseInt(id) },
        data: {
            name,
            categoryId: parseInt(categoryId),
        },
    });
};

export const deleteProduct = (id) => {
    return prisma.product.delete({
        where: { id: parseInt(id) },
    });
};

export const countByCategoryId = (categoryId) => {
    return prisma.product.count({
        where: { categoryId: parseInt(categoryId) },
    });
};

export const updateManyByCategoryId = (categoryId, newCategoryId) => {
    return prisma.product.updateMany({
        where: { categoryId: parseInt(categoryId) },
        data: { categoryId: parseInt(newCategoryId) },
    });
};
