const http = require('http');

const server = http.createServer((req, res) => {
  someAsyncOperation()
    .then(() => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Success!');
    })
    .catch(err => {
      console.error('Error:', err); // Log the error for debugging
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error'); // Send an appropriate error response
    });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        reject(new Error('Simulated asynchronous error'));
      } else {
        resolve();
      }
    }, 1000);
  });
}