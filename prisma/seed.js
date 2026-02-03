import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const category1 = await prisma.category.create({
    data: {
      name: 'Electronics',
    },
  });

  const category2 = await prisma.category.create({
    data: {
      name: 'Books',
    },
  });

  const category3 = await prisma.category.create({
    data: {
      name: 'Clothing',
    },
  });

  await prisma.product.createMany({
    data: [
      { name: 'Laptop', categoryId: category1.id },
      { name: 'Smartphone', categoryId: category1.id },
      { name: 'The Great Gatsby', categoryId: category2.id },
      { name: 'To Kill a Mockingbird', categoryId: category2.id },
      { name: 'T-shirt', categoryId: category3.id },
      { name: 'Jeans', categoryId: category3.id },
      { name: 'Pride and Prejudice', categoryId: category2.id },
      { name: '1984', categoryId: category2.id },
      { name: 'The Catcher in the Rye', categoryId: category2.id },
      { name: 'Wuthering Heights', categoryId: category2.id },
      { name: 'Jane Eyre', categoryId: category2.id },
      { name: 'Brave New World', categoryId: category2.id },
      { name: 'The Lord of the Rings', categoryId: category2.id },
      { name: 'The Hobbit', categoryId: category2.id },
      { name: 'Moby Dick', categoryId: category2.id },
    ],
  });

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
