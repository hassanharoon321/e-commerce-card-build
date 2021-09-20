require("dotenv").config()

const productData = require("./data/Products")

const connectDB = require("./config/db")

const Product = require("./models/Product");

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(productData)
        console.log("data success")
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

importData();