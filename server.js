
const express = require('express');
const router = require('./app/routes/index');
const config = require('./app/config/server_config');
const bodyParser = require('body-parser'); // If you are using an older version of Express
const app = express();

// For modern Express (4.16.0 and higher)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);
app.get('/', (req, res, next) => {
    res.send("hello world");
    next();
})
app.listen(config.port, config.host, () => {
    console.log(`Server is running on port http://${config.host}:${config.port}`);
});


