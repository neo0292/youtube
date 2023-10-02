import mongoose from "mongoose";


async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('MongoDB connection established successfully');
      }) 

    connection.on('error',(err) => {
      console.log('MongoDB connection error, error: ' + err);
      process.exit();
      }) 
  } 

catch (error) {
    console.log('SOMETHING GOES WRONG!');
    console.error(error);
    
  }

}
export default connect