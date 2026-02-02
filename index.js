const express = require('express');
const dotenv = require('dotenv');
const categoryRoutes = require('./routes/category.routes.js');
const productRoutes = require('./routes/product.routes.js');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.redirect('/products');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
