import createDatabaseConnection from "./database.js";
import createWebServer from "./web-server.js";


function createCore(configurations = {}) { // se não passado nada, injeta obj em branco
    const database = configurations.database || createDatabaseConnection();
    const webserver = configurations.webserver || createWebServer();

    function start() {
        console.log("> [core] Starting...");
        database.start();
        webserver.start();
        console.log("> [core] Started and running!");
    }

    function stop() {
        console.log("> [core] Stopping...");
        webserver.stop();
        database.stop();
        console.log("> [core] Sucessfully stopped!");
    }

    // Retorna em um objeto
    return {
        start,
        stop
    }
}

export default createCore;