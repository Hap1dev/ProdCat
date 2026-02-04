import express from 'express';
import dotenv from 'dotenv';
import categoryRoutes from './routes/category.routes.js';
import productRoutes from './routes/product.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
