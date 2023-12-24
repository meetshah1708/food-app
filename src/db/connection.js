const mongoose = require("mongoose");

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