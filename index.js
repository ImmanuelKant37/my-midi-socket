const Server =  require('./models/server');
require('dotenv').config();
const server = new Server();

server.execute();

//Desplegar el directorio publico 
// app.use( express.static( __dirname + '/public'));

// io.on('connection',(socket)=>{
//     socket.emit('mensaje-bienvenida', {
//         msg: 'Bienvenido al server',
//         fecha: new Date(),
//         id: socket.id
//     })
//     socket.on('mensaje-to-servidor',(data)=>{
//         console.log(data);
//         io.emit('mensaje-from-servidor', data)

//     })
//     console.log('Cliente conectado!')


//     })
   


