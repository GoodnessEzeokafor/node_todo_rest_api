const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/TodoApp';
mongoose.Promise = global.Promise;
mongoose.connect(dbUrl,{useNewUrlParser: true});




module.exports = {mongoose};
