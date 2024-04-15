import startServer from "./src/server.js";

try {
  startServer();
} catch (error) {
  console.error(`SERVER ERROR: ${error}`);
}
