require('dotenv').config();

const app = require('./app')
const mongoose =    require('mongoose')

const port = process.env.PORT || 3600;

const mongooseconnection = async( ) => {
try{
    await mongoose.connect(process.env.MONGO_URL,
        {
            dbName: 'Products', 
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    console.log("MongoDB connected successfully")
}
catch(error){
    console.error("MongoDB connection error", error)
}

}

mongooseconnection()

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


