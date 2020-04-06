const net = require('net');

net.createServer((socket) => socket.pipe(net.connect(9221, '192.168.2.102')).pipe(socket))
  .listen(10801, '0.0.0.0')
  .on('close', () => console.log("proxy server close."))
  .on('error', (e) => console.log(`socket listen ${e}`))
