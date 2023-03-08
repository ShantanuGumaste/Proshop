import mongoose from "mongoose";
import pkg from 'colors';
import users from './data/users.js'
import products from './data/products.js'
import connectDB from "./config/db.js";
import  dotenv  from "dotenv";
import  Order  from "./Models/orderModel.js";
import  Product  from "./Models/productModel.js";
import  User  from "./Models/userModels.js";

const {Color} = pkg;

connectDB()

dotenv.config()

const importData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(products => {
            return {...products, user: adminUser}
        })

        await Product.insertMany(sampleProducts)
        
        console.log('Data imported!'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        
        
        console.log('Data destroyed!'.red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

if(process.argv[2]==='-d'){
    destroyData()
} else {
    importData()
}