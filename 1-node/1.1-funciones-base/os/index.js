const os = require('os');

console.log('version del kernel: ', os.version());
console.log('arquitectura (x64 o x86(x32)): ', os.arch()); //se obtiene la arquitectura (x64 o x86(x32))
console.log('informacion acerca de los cpu: ', os.cpus()); //da informacion acerca de los cpu
console.log('memoria libre: ', os.freemem()); //memoria libre
console.log('carpeta del usuario actual: ', os.homedir()); //carpeta del usuario actual
console.log('mi direccion ip (local) o mi hostname: ', os.hostname()); //mi direccion ip (local) o mi hostname
console.log('version del sistema operativo: ', os.platform()); //version del sistema operativo