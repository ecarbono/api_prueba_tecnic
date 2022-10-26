const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser')


class Server {
    constructor() {
        this.port = process.env.PORT || 8484;
        this.pathUsers = "/api/users";
        this.app = express();

        this.middlewares();

        this.routes();
    }


    middlewares() {
        //Config Json Express
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(cookieParser());
    }

    routes() {
        this.app.use(this.pathUsers, require("../routes/users.routes"));
        
        
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servicio express On ${this.port}`);
        });
    }
}

module.exports = Server;