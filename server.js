const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejs = require('ejs');
// require('dotenv').config();
const morgan = require('morgan');
const moment = require('moment');
moment.locale('ru'); 
// const validator = require('validator');
mongoose.set('strictQuery', false);
const TimesModel = require('./models/Times.js');





mongoose
    .connect('mongodb+srv://bratik026:ZnFa1997@cluster0.4oaxb.mongodb.net/BrainUp?retryWrites=true&w=majority')
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB ERROR', err));

const createPath = (page) => path.resolve(__dirname, 'ejs-views', `${page}.ejs`);
const app = express();
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));


app.get('/', (req, res) => {
    const title = 'Главная';

    TimesModel
    .find()
    .sort({ createdAt: -1 })
    // .then(posts => console.log(posts))
    .then(posts => res.render(createPath('index'), { posts, title, moment }))
    .catch((error) => {
      console.log(error);
      res.render(createPath('error'));
    });
    
});


app.post('/', (req, res) => {
    // console.log(req);
    // console.log(datevalue, gameCount);

    console.log(req.body);
    const { datevalue, gameCount } = req.body;
    console.log(datevalue, gameCount);
    const post = new TimesModel({ datevalue, gameCount });
    post
    .save()
    .then((result) => res.redirect('/'))
    .catch((error) => {
      console.log(error);
      res.render(createPath('error'), { title: 'Error' });
    });

    // TimesModel
    // .findByIdAndUpdate('63a582a521049717611a93ab', { datevalue, gameCount})
    // .then((result) => res.redirect('/'))
    // .catch((error) => {
    //     console.log(error);
    //     res.render(createPath('error'), { title: 'Error' });
    // });


    // const { datevalue, gameCount } = req.body;
    // const post = new Post({ datevalue, gameCount });
    // TimesModel
    // .save()
    // .then((result) => res.redirect('/'))
    // .catch((error) => {
    //   console.log(error);
    //   res.render(createPath('error'), { title: 'Error' });
    // });

    //   res
    //   .status(404)
    //   res.send('<p>some html</p>')


});




app.listen(4444, (err) => {
    if (err) return console.log(err);
    console.log(`listening port ${4444}`);
});