const EventEmitter = require("events");
const http = require("http");
// const myEmitter = new EventEmitter();

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
  console.log("There was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("Customer name: Hamza");
});

myEmitter.on("newSale", (stock) => {
  console.log(`Number of stocks now: ${stock}`);
});

myEmitter.emit("newSale", 9);

///////////////////// //

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received");
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another Request received");
});

server.on("close", (req, res) => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests...");
});
