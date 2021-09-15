require('./models/db')
const express = require('express')
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');



const employeeController = require('./controllers/employeeController')

var app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json())

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'mainlayout', layoutsDir: __dirname + '/views/layouts'}));
app.set('view engine', 'hbs');


app.listen(4050, () => {
    console.log('Express server started at port : 4050');
});

app.use('/employee', employeeController)