const mongoose = require('mongoose');
let MongoDB_url = "mongodb+srv://Testapp:Password123456@cluster0.jwa1a.mongodb.net/TestAppDB?retryWrites=true&w=majority";
mongoose.connect(MongoDB_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
