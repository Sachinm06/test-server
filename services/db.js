const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true })

const User = mongoose.model("User",
    {
        username: String,
        number: Number,
        password: String

    })
module.exports = {
    User
}