//create web server
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

//connect to database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments', {useNewUrlParser: true, useUnifiedTopology: true});

//create schema
const commentSchema = new mongoose.Schema({
    name: String,
    comment: String
});

//create model
const Comment = mongoose.model('Comment', commentSchema);

//set up body parser
app.use(bodyParser.urlencoded({extended: true}));

//set up static files
app.use(express.static(path.join(__dirname, 'public')));

//set up ejs
app.set('view engine', 'ejs');

//set up routes
app.get('/', (req, res) => {
    res.render('index');
}
);
