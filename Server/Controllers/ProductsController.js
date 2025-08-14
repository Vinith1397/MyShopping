const Products = require('../models/Products')
const ProductService = require('../Services/ProductService')
const getProducts = async(req, res) => {
  try{
    const products = await ProductService.getAll();
    res.status(200).json(products)
}
catch(error){
    res.status(500).json({message: error.message})
}
}

const getProduct = async(req, res) => {
    const id = req.params.id
    try{
      const product = await ProductService.getbyId(id);
      res.status(200).json(product)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
  }
const SearchProducts = async(req, res) => {
    const searchKey = req.query.key
    try{
      const products = await ProductService.searchBy(searchKey);
      res.status(200).json(products)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
  }

const postProducts = async(req, res) => {
    const products = req.body
    if(Array.isArray(products) && products.length > 0){
        try{
            const product = await Products.insertMany(products)
            res.status(201).json({message: "Products added successfully", product})
        }
        catch(error){
            if(error.name === 'ValidationError'){
                const message = Object.values(error.errors).map(val => val.message)
                res.status(400).json({message: message.join(', ')})
            }
            if (error.code === 11000) {
                let field = 'unknown field';
                let value = 'unknown';
                const match = error.message.match(/index: (\w+)_\d+/);
                if (match) {
                    field = match[1];
                    value = error.keyValue?.[field] || 'unknown';
                }
                
                return res.status(400).json({
                    message: `A product with this ${field} already exists`,
                });
            }
            res.status(500).json({message: error.message})
        }

    }
    else{
    try{
        const product = await Products.create(products)
        res.status(201).json({message: "Product added successfully", product})
    }
    catch(error){
        if(error.name === 'ValidationError'){
            const message = Object.values(error.errors).map(val => val.message)
            res.status(400).json({message: message})
        }
        if (error.code === 11000) {
            let field = 'unknown field';
            let value = 'unknown';
        
            const match = error.message.match(/index: (\w+)_\d+/);
            if (match) {
                field = match[1];
                value = error.keyValue?.[field] || 'unknown';
            }
            
            return res.status(400).json({
                message: `A product with this ${field} already exists`,
            });
        }
        res.status(500).json({message: error.message})
    }
}
}

const HandleDeleteProducts = async (req, res) => {
    try {

      if (req.params.id) {
        const result = await ProductService.deleteProductById(req.params.id);
        return res.status(200).json({
          message: 'Product deleted successfully',
          deletedCount: result.deletedCount
        });
      }

      if (req.body && Array.isArray(req.body.ids) && req.body.ids.length > 0) {
        const result = await ProductService.bulkDeleteProductsByIds(req.body.ids);
        return res.status(200).json({
          message: 'Products deleted successfully',
          deletedCount: result.deletedCount
        });
      }
  
      const result = await ProductService.deleteAllProducts();
      return res.status(200).json({
        message: 'All products deleted successfully',
        deletedCount: result.deletedCount
      });
  
    } catch (err) {
      console.error('Error deleting products:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };
module.exports = {getProducts,getProduct,postProducts,SearchProducts,HandleDeleteProducts}
