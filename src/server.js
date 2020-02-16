import Server from './app';

console.log(`Tamo live na porta ${process.env.PORT}`);

Server.listen(process.env.PORT);
