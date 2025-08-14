const {getProducts,getProduct, postProducts, SearchProducts,HandleDeleteProducts} = require('../Controllers/ProductsController')
const express = require('express')

const router = express.Router()


router.get('/', getProducts)
router.post('/', postProducts)
router.get('/search', SearchProducts)
router.get('/:id', getProduct)
router.delete('/delete',HandleDeleteProducts)


module.exports = router;


