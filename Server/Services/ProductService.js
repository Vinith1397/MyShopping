const Products = require('../models/Products')
const redisClient = require( '../config/Redis');
const { id_ID } = require('@faker-js/faker');
class ProductService {
    static async getAll(){
         const key = 'all_shooping_products' 
         const raw = await redisClient.json.get(key);
     if (raw) {
         console.log("Cache Hit")
        return raw;}
const products = await Products.find().sort({createdAt: -1}).lean()
if (products.length > 0) {await redisClient.json.set(key,'$',products)}
return products;
}
   static async getbyId(id){
    const key = 'all_shooping_products'
    const productCache = await redisClient.json.get(key);
    if (productCache && Array.isArray(productCache)) {
        const found = productCache.find(p => p._id.toString() === id);
        console.log(found)
        if (found){
             console.log("Cache Hit")
             return found
            };
    }
    const product = await Products.findById(id);
    if(product){
        console.log( "database hit")
    }
    return product;
   }
   static async searchBy(searchKey){
    const key = 'all_shooping_products'
    const productCache = await redisClient.json.get(key);
    if (!searchKey || typeof searchKey !== 'string') {
        throw new Error('Invalid search key');
    }

    const regex = new RegExp(searchKey, 'i');

    if(productCache && Array.isArray(productCache)){
        const cachedMatches = productCache.filter(p =>{   
          return regex.test(p.Name) ||
            regex.test(p.description)||
            regex.test(p.category) ||
            regex.test(p.subCategory)
        })
        if(cachedMatches.length > 0){
            console.log('Cache Hit')
            return cachedMatches
        }
    }
    
    const dbMatches = await Products.find({
        $or: [
            { Name: { $regex: regex } },
            { description: { $regex: regex } },
            { category: { $regex: regex } },
            { subCategory: { $regex: regex } }
        ]
    }).lean();
    
    return dbMatches
}

 static async DeleteProductbyid(id){

    await Products.deleteOne({_id: id})

    const key = 'all_shooping_products' 
    const productCache = await redisClient.json.get(key);

    if (productCache && Array.isArray(productCache)) {
        const updatedCache = productCache.filter(p => p._id.toString() !== id);
        await redisClient.json.set(key, '$', updatedCache);
        console.log("Removed from Redis cache too");
    }
 }

 static async BulkDeleteProductbyids(ids){

    const result = await Products.deleteMany({ _id: { $in: ids } });
    const key = 'all_shooping_products' 
    const productCache = await redisClient.json.get(key);

    await redisClient.del('all_shooping_products'); 

  return { deletedCount: result.deletedCount || 0 };
 }


 static async deleteAllProducts() {
    const result = await Products.deleteMany({});     
    await redisClient.del('all_shooping_products');   
    return { deletedCount: result.deletedCount || 0 };
  }

}
module.exports = ProductService;