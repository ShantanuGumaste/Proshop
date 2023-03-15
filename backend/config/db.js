import mongoose from "mongoose"


const connectDB = async () => {
    const uri = process.env.MONGO_URI;
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