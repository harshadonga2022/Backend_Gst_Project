var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors') //Connection with React

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
var usersRouter = require('./routes/userRouter');
var party_MasterRouter = require('./routes/party_masterRouter');
var item_MasterRouter = require('./routes/item_masterRouter');
var bill_item_MasterRouter = require('./routes/bill_itemsRouter');
var gst_sales_MasterRouter = require('./routes/gst_salesRouter');

/*____________ Connection with MongoDB ________________*/
const mongoose = require('mongoose'); //require mongoose
mongoose.connect('mongodb+srv://harshadonga2022:cdmi123@cluster0.mpiaze4.mongodb.net/harsha_ff?retryWrites=true&w=majority') //Database in MongoDB
  .then(() => console.log('Connected!')) //
  .catch((error)=>{
    console.log(error.message)
  })

  var app = express();

/*Connection with React*/
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/users', usersRouter);
app.use('/party', party_MasterRouter);
app.use('/item', item_MasterRouter);
app.use('/bill_item', bill_item_MasterRouter);
app.use('/gst_sale', gst_sales_MasterRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
