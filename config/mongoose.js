/****************IMPORTING PACKAGE*******************************/
const mongoose = require("mongoose");


/*******************MAKING CONNECTION***************************/
<<<<<<< HEAD
//mongoose.connect("mongodb+srv://Madhuri12:root@cluster0.ux5jnqa.mongodb.net/csv_upload_db?retryWrites=true&w=majority");  //mongodb://localhost/CSV
mongoose.connect("mongodb://localhost/CSV");
=======
mongoose.connect("mongodb+srv://Madhuri12:root@cluster0.ux5jnqa.mongodb.net/csv_upload_db?retryWrites=true&w=majority");  //mongodb://localhost/CSV
>>>>>>> 2c64db0a03f32183a984685070821638949d683c

//setting it to db
const db = mongoose.connection;

/****************CHECKING CONNECTION****************************/
//if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to DB");
});
