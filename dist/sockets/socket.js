"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diagrama = exports.desconectar = void 0;
const desconectar = (cliente) => {
    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
};
exports.desconectar = desconectar;
//escuchar mensajes
/* export const mensaje = (cliente: Socket, io: socketIO.Server) => {
    cliente.on('mensaje', (payload : {de: string, cuerpo: string}) => {
        console.log('mensaje recibido', payload);

        io.emit('mensaje-nuevo', payload);
    });
} */
//escuchar los datos de los diagramas
const diagrama = (cliente, io) => {
    cliente.on('emite-datos', (data) => {
        //console.log(data);
        io.emit('obtiene-datos', data);
        cliente.broadcast.emit('obtiene-datos', data);
    });
};
exports.diagrama = diagrama;
