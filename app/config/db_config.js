// 
require('dotenv').config();

module.exports = {
    uri: process.env.MONGO_URL || undefined,
    pwd: process.env.DB_PWD || undefined,
    dbname: process.env.DB_NAME || 'my_portfolio',
    retryWrites: process.env.RETRY_WRITES || true,
    w: process.env.W || "majority",
    collection: 'projet'
}