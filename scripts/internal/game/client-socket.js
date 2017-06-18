
function initClientSocketConnection(_io)
{
var socket = _io('http://localhost:6505');

 socket.on('inviteToGame', function (data) {
   console.log(data);
    console.log("connected to server")
   socket.emit('joinGame', { my: 'data' });


 });
}
