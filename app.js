const http = require('http');

const port = process.env.PORT || 4000;

// Create a server
http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello world</h1>')
}).listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

//Write file in nodejs
const fs = require('fs');

// First way to write file
const content = "file content";

fs.writeFile('file.txt', content, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

//Second way to write file

try {
    fs.writeFileSync('file.txt', content);
} catch (err) {
    console.error(err);
}

//Thrid way to write file

async() => {
    try {
        await fs.writeFile('file.txt', content);
    } catch (err) {
        console.error(err);
    }
}

//Read file in nodejs
async() => {
    try {
        const data = await fs.readFile('file.txt', 'utf8');
    } catch (err) {
        console.log(err)
    }
}