const mongoose = require("mongoose");


const connect = () => {

  return mongoose.connect("mongodb+srv://user:123@cluster0.jxpil.mongodb.net/GrowGreen2?retryWrites=true&w=majority")
}


module.exports = connect;