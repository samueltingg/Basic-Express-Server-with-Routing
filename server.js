import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.get("/about", (req, res) => {
	res.sendFile(__dirname + "/public/about.html");
});

app.use((req, res) => {
	res.status(404).sendFile(__dirname + "/public/404.html");
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
