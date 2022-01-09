var mongoose = require('mongoose');
var URL = process.env.URL_MONGODB || 'mongodb://localhost/biblioteca';

mongoose.connect(URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    // useCreateIndex: true
}).then(db => console.log('Base de datos conectada'))
.catch(err => console.loh("Error: "+err));
