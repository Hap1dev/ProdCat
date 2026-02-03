import prisma from '../prisma/client.js';

export const findMany = () => {
  return prisma.category.findMany();
};

export const findUnique = (id) => {
  return prisma.category.findUnique({
    where: { id: parseInt(id) },
  });
};

export const create = (name) => {
  return prisma.category.create({
    data: { name },
  });
};

export const update = (id, name) => {
  return prisma.category.update({
    where: { id: parseInt(id) },
    data: { name },
  });
};

export const deleteCategory = (id) => {
  return prisma.category.delete({
    where: { id: parseInt(id) },
  });
};
