import {connect} from "mongoose";



const connectDatabase = async () =>{
    const mongodb_uri = process.env.MONGODB_URI;
    try {
        await connect(mongodb_uri);
        console.log(`Database is connected!`)
    } catch (e) {
        process.exit(1);
    }
}
export default connectDatabase;