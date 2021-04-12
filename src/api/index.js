#!/usr/bin/env node
require("dotenv").config();
const express = require("express");
const app = express();

const getPoints = require("./points");
const getSeason = require("./season");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/test", (req, res, next) => {
  res.json({ title: "Success" });
});

app.use("/points", (req, res) => {
  getPoints(req, res);
});
app.use("/season", (req, res) => {
  getSeason(req, res);
});
app.use("/calculate", (req, res) => {
  calculate(req, res);
});

let http = require("http");

let port = process.env.PORT;
app.set("port", port);

let server = http.createServer(app);

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  let bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address();
  let bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
}
