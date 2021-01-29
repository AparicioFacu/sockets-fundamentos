//Aqui se realiza la coneccion del FrontEnd con el BackEnd con sockets
let socket = io();
//Se Conecta al servidor
// Los on son para escuchar
socket.on('connect', function() {
    console.log('Conectado al Servidor');
});
//Se desconecta del servidor
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});
//Los emit son para enviar informacion
//El segundo parametro es lo que se envia al servidor
socket.emit('enviarMensaje', {
    usuario: 'Chino',
    mensaje: 'Hola mundo'
}, function(resp) { // esta funcion se conecta con el server 
    console.log('Respuesta Server: ', resp);
});
//Escuchar Informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});