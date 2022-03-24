const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', 'views');

const userRoutes = require("./routes/user");

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes);
    /*app.get('/DetailReviewsPage', (req, res) =>{
        res.render('DetailReviewsPage', {list: arr});
    });*/

app.listen(3000);