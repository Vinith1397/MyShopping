const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
require('dotenv').config();

 mongoose.connect('mongodb+srv://pasulavinithkumar:Vinith@latestcluster.nwoysxh.mongodb.net/Products?retryWrites=true&w=majority&appName=LatestCluster',
        {
            dbName: 'Products', 
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ Connection error:", err));

const productSchema = new mongoose.Schema({
  Name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  subCategory: { type: String },
  dateCreated: { type: Date, default: Date.now },
  bestseller: { type: Boolean, default: false }
});

const Product = mongoose.model('Product', productSchema);


const fashionCategories = {
  "Shirts": ["Casual", "Formal", "Slim Fit"],
  "Pants": ["Jeans", "Chinos", "Joggers"],
  "Dresses": ["Evening", "Summer", "Party"],
  "Jackets": ["Leather", "Bomber", "Denim"],
  "Shoes": ["Sneakers", "Boots", "Heels"],
  "Accessories": ["Belts", "Watches", "Bags"]
};

const categoryKeys = Object.keys(fashionCategories);

// Generate 1000 fashion products
const generateProducts = () => {
  const products = [];

  for (let i = 1; i <= 1000; i++) {
    const category = faker.helpers.arrayElement(categoryKeys);
    const subCategory = faker.helpers.arrayElement(fashionCategories[category]);
    const name = `${faker.color.human()} ${subCategory} ${category} ${i}`; // Unique name

    products.push({
      Name: name,
      price: parseFloat(faker.commerce.price(15, 300)),
      description: faker.commerce.productDescription(),
      image: `https://loremflickr.com/640/480/fashion?lock=${i}`, 
      category,
      subCategory,
      bestseller: faker.datatype.boolean()
    });
  }

  return products;
};

const seedProducts = async () => {
  try {
    const data = generateProducts();
    console.log("🌱 Seeding fashion products...");
    await Product.insertMany(data);
    console.log("✅ 1000 fashion products added!");
  } catch (err) {
    console.error("❌ Seeding error:", err.message);
  } finally {
    mongoose.disconnect();
  }
};

seedProducts();