import mongoose from "mongoose";

const URI = 'mongodb+srv://arbindgiri090:lZLIlphsYfJdKbeA@cluster0.vstfzum.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function connectToDatabase() {
        return mongoose.connect(URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
        })
}
export { connectToDatabase };