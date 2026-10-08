const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send(`
        <html style="background-color: #1e1e1e; color: white; font-family: Arial; text-align: center; padding-top: 15vh;">
            <h1>🚀 DevOps CI Pipeline Project</h1>
            <h2 style="color: #4CAF50;">Version: v1.0.0</h2>
            <p>Automatically built and tested via GitHub Actions & Docker!</p>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});