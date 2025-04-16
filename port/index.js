removeEventListener
//A port is a virtual number (between 0 and 65535) used in networking to identify specific services or applications on a device.

//IP Address tells where the device is.

//Port Number tells what service on that device you want to talk to.

//For example:

//  http://localhost:3000 → Port 3000 is used by your local server (like Node.js).

// https://google.com uses port 443 behind the scenes (for HTTPS).

const http = require("http://localhost:3000");

const server = http.createServer((req, res) => {
  res.end("Hello from Port 5000!");
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
