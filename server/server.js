// /* Modules */
const logger = require('morgan');
const cors = require('cors');
const http = require('http');
const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');
const mongoose = require('mongoose');
const helmet = require('helmet');
const express = require('express');
const port = process.env.PORT || 8080;

/* Routes */
const ItemOfTheCreationRouter = require('./routes/itemOfTheCreation.route');
const CreationRouter = require('./routes/creation.route');
const FabricRouter = require('./routes/fabric.route');

const app = express();
app.use(helmet())

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://FaronS98:zaqwertyhn@cluster0.nqpnp.mongodb.net/Tailor-Shop?retryWrites=true&w=majority', {useNewUrlParser: true});

app.use('/', express.static(__dirname));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "DELETE, GET, POST, PATCH");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
    app.use(errorhandler());
}

app.get('/app', (req, res) => {
    res.send('Everything fine');
});

app.use('/app', ItemOfTheCreationRouter);
app.use('/app', CreationRouter);
app.use('/app', FabricRouter);

var server = http.createServer(app);
server.listen(port,() => console.log("Server running on: " + port));
