import { connect } from "mongoose";
const connection =async()=>{
    try{
        await connect("mongodb+srv://vijaynimar8:EEse4IrPJ85gjMp1@skillbridge.kbj1mmq.mongodb.net/?retryWrites=true&w=majority&appName=skillBridge")
        console.log("connected to mongodb");
    }catch(err){
        console.log("err in mongo connection");
    }
}
export default connection