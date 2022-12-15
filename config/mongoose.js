/****************IMPORTING PACKAGE*******************************/
const mongoose = require("mongoose");

let MONGO_URL = 'mongodb+srv://Madhuri12:root@cluster0.ux5jnqa.mongodb.net/csv_upload_db?retryWrites=true&w=majority';
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL);

/*******************MAKING CONNECTION***************************/
//mongoose.connect("mongodb+srv://Madhuri12:root@cluster0.ux5jnqa.mongodb.net/csv_upload_db?retryWrites=true&w=majority");  //mongodb://localhost/CSV

//setting it to db
const db = mongoose.connection;

/****************CHECKING CONNECTION****************************/
//if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to DB");
});
