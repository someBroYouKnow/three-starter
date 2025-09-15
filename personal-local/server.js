import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();

// Get __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const frontendDirName=  __dirname + "/frontend"

// Serve static files (e.g., script.js)
app.use(express.static(frontendDirName));

app.get("/", (req, res) => {
    console.log("Base route requested, sending file index.html");
    res.sendFile('index.html', { root: frontendDirName });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});