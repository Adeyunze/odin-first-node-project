//create an express application
const express = require('express');
const app = express();

const path = require('path');


const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-me.html'));
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '404.html'));
})


//Listen on port 8080, IP defaults to
//IPv4 address

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});