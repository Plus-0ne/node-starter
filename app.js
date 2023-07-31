const express = require('express');
app = express();
const path = require('path')
const dotenv = require('dotenv');
dotenv.config();

const mainRoutes = require('./routes/mainRoutes');

const db = require('./config/DatabaseConnection');



app.set('view engine', 'ejs');

app.locals.baseUrl = __dirname;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/',mainRoutes);

app.listen(process.env.APP_PORT, () => {
    console.log("Listening to port "+process.env.APP_PORT);
});