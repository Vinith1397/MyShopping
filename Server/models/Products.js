const mongoose = require('mongoose')


const ProductsSchema = new mongoose.Schema(
    {
         Name : { type : String, required : [true, "Name is required Field Please Enter Name"], trim : true,maxlength : [100, "Name can not be more than 100 characters"], minlength : [3, "Name can not be less than 3 characters"],unique : [true,"Product with this name already exists"]},
         price : {type : Number , required : [true, "Price is required Field Please Enter Price"], trim : true,maxlength : [100, "Price can not be more than 100 characters"], minlength : [3, "Price can not be less than 3 characters"]},
         description : {type : String , required : [true, "Description is required Field Please Enter Description"], trim : true,maxlength : [100, "Description can not be more than 100 characters"], minlength : [3, "Description can not be less than 3 characters"]},
         image : {type : String , required : [true, "Image is required Field Please Enter Image"]},
         category : {type : String , required : [true, "Category is required Field Please Enter Category"]},
         subCategory : {type : String },
         dateCreated: {type : Date , default : Date.now},
         bestseller : {type : Boolean , default : false},   
    }
)
const Products = mongoose.model("Products", ProductsSchema)

module.exports = Products

