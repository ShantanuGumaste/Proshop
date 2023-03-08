import mongoose from "mongoose"


const connectDB = async () => {
    const uri = "mongodb+srv://shantanugumaste88:Shantanu_123@cluster0.xqamldo.mongodb.net/?retryWrites=true&w=majority"
    try {
        const conn = await mongoose.connect(uri, {
        });
        console.log(`Mongoose Connected: ${conn.connection.host}`.cyan.bold)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.bold);
        process.exit(1)
    }
}

export default connectDB