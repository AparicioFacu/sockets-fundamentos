const { io } = require('../server');

//Client tiene contiene toda la informacion de la conexion que se establecio(info de la pc)
//Aqui tambien es cuando el usuario se conecta
//Los on son para escuchar
io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    //Aqui por si el usuario pierde la internet o paso algo y se desconecta
    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });
    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        //broadcast
        client.broadcast.emit('enviarMensaje', data) //al hacer esto le estoy enviandoa  todos los usuario que esten en la aplicacion


        // if (data.usuario) {
        //     callback({ //el callback el que recibe desde el index
        //         resp: 'Todo Salio Bien!!'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo Salio Mal!!'
        //     });
        // }
    });
});