const connection = require('../connection/connection');
const configDb = require('../config/db_config');

class PortfolioController {
    contructor(configDb) {
        this.dbname = configDb.dbname;
        this.collection = configDb.collection;
    }
    //connect to db
    async connectToDb(dbname) {
        if (dbname) {
            const con = await connection.connect()
            return con.db(dbname);
        }
        return null;
    }
    async collection() {
        const db = await this.connectToDb(configDb.dbname);
        const collection = await db.collection(configDb.collection);
        return collection;
    }
    //select all data in a collection
    async getDataProject() {
        const results = (await this.collection()).find({}).limit(50).toArray();
        return results;
    }
    async addProject(body) {
        console.log(body);
        if (body) {
            body.date_created = new Date();
            const results = await (await this.collection()).insertOne(body);

            return results;

        }
        return null;

    }
    async updateProject(id, body) {
        if (id) {
            const results = (await this.collection()).updateOne({ _id: ObjectId(req.params.id) }, { $set: body });
            return results;
        }
        return null;
    }

    async deleteProject(id) {
        if (id) {
            const results = (await this.collection()).deleteOne({ _id: ObjectId(req.params.id) });
            return results;
        }
        return null;
    }


}
module.exports = new PortfolioController(configDb);