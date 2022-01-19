function createWebServer() {
    function start() {
        console.log("> [webserver] Starting...");
        console.log("> [webserver] Waiting for port to be available...");
        console.log("> [webserver] Started!");
    }

    function stop() {
        console.log("> [webserver] Stopping...");
        console.log("> [webserver] Gracefully waiting for all clients...");
        console.log("> [webserver] Closing all ports...");
        console.log("> [webserver] Stopped!");
    }

    return {
        start,
        stop
    }
}

export default createWebServer();