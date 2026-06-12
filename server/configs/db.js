import mongoose from 'mongoose'

const connectDB = async () =>{
    try {
        mongoose.connection.on('connected', ()=> console.log('Database connection'))
        await mongoose.connect(`${process.env.MONGODB_URL}/flimfusion`)
    } catch(error){
        console.log(error.message)
    }
}


export default connectDB