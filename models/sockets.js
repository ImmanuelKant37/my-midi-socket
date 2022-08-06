class Sockets{
    constructor(io){
        this.io = io;
        this.socketEvents();
    }
    socketEvents(){
        //On connection
        this.io.on('connection',(socket)=>{
            //Escuchar evento server
            socket.on('mensaje-to-servidor', (data)=>{
                console.log(data);
                this.io.emit('mensaje-from-servidor',data);
            })
        })
    }
}

module.exports = Sockets;