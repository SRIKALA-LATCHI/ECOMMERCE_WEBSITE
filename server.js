const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const products = [
    { id: 1, name: 'T-shirt', price: 19.99, img: '/images/tshirt.jpg' },
    { id: 2, name: 'Sneakers', price: 49.99, img: '/images/shoes.jpg' },
    { id: 3, name: 'Hat', price: 14.99, img: '/images/hat.jpg' }
  ];
  res.render('index', { products });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
