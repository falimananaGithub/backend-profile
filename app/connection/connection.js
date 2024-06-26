// 
const configDb = require('../config/db_config');
const { MongoClient } = require('mongodb');

//normalise url
const normalizeUrl = (config) => {
    let newUri = "";
    if (config.uri != undefined) {
        newUri = config.uri.replace('here', config.pwd);
        return newUri
    } else {
        return null;
    }
}
const url = normalizeUrl(configDb) != null ? `${normalizeUrl(configDb)}` : "";
console.log(url);

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true })
var conn;
class Connection {
    async connect() {
        try {
            conn = await client.connect();
            console.log("Connected to mongodb");
            return conn;

        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            return null;
        }
    }
}


module.exports = new Connection();