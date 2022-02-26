const express = require("express");
const bodyParser = require('body-parser');
const { Nuxt, Builder } = require("nuxt");
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3000;

app.set("port", port);

// Import and Set Nuxt.js options
let config = require("../nuxt.config.js");
config.dev = !(process.env.NODE_ENV === "production");

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  console.log(
    "Server listeningss on http://" + host + ":" + port
  ); // eslint-disable-line no-console
}



start();
