const express = require("express");
const app = express()
const port = 5000
// const mongoose = require("./src/db/connection");
const mongoose = require("mongoose");
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:3000");//cors fix
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With,Content-Type,Accept"
    );
    next();
})
app.get('/', (req, res) => {
    res.send("hello");

})


mongoose.connect("mongodb://127.0.0.1:27017/gofoodmern", {                     //do Connection in compass if err comes change
    useUnifiedTopology: true                                                   // in url loclhost to 127.0.0.1
}).then(() => {
    console.log("Connection successful")
    const fetchdata = mongoose.connection.db.collection("sample");
    fetchdata.find({}).toArray(function (err, data) {
        if (err) {
            console.log(err);
        }
        else console.log(data);
    })
}).catch((e) => {
    console.log("Not successful ", e);
});
app.use(express.json)
app.use('/api', require("./src/routes/Createuser"))
app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})