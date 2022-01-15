const fs = require('fs');
const server = require('http').createServer(); 

server.on('request', (req, res) => {
    //Solution one

    // fs.readFile('test-file.txt', (err, data) => {
    //     if(err) console.log(err);
    //     res.end(data);
    // }); 

    //Solution two using streams 

    // const readable = fs.createReadStream('test-fle.txt');

    // readable.on('data', (chunk) => {
    //     res.write(chunk);
    // })

    // readable.on('end', () =>{
    //     res.end();
    // })

    // readable.on('error', err =>{
    //     console.log(err);
    //     res.statusCode = 500
    //     res.end("File not found")
    // })

    //Solution three example
    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res)

    //readableSource.pipe(writableSource Stream)

})

server.listen(8000, "127.0.0.1", ()=> {
    console.log("Listening...")
})