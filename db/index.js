const { connect } = require('mongoose')

// const URI = "mongodb+srv://brillian:FwZ9h0Pa7Zlx9prD@cluster0.cmlec.mongodb.net/brillio-db?retryWrites=true&w=majority"
const URI ="mongodb+srv://brillian:FwZ9h0Pa7Zlx9prD@cluster0.cmlec.mongodb.net/brillio-db?retryWrites=true&w=majority"

connect(URI)
    .then(conn => console.log("MongoDB Connected...."))
    .catch(console.log)