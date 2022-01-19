import createCore from "./core.js";

function createMock() {
    function start() {
        console.log("> [mock] ...");
    }
    function stop() {
        console.log("> [mock] ...");
    }

    return {
        start,
        stop
    }
}

describe("core quando importado", () => {
    test("deve possuir o método #start e #stop", () => {
        const core = createCore();
        expect(core).toHaveProperty("start");
        expect(core).toHaveProperty("stop");
    });
})

describe("core quando inicializado", () => {
    test("não deve retornar erros", () => {
        const databaseMock = createMock();
        const webserverMock = createMock();

        const core = createCore({
            database: databaseMock,
            webserver: webserverMock
        });

        expect(() => {
            core.start();
        }).not.toThrow();
    });
})
