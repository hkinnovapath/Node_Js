const os=require("os");

console.log(os.arch());
console.log(os.totalmem()/(1024*1024*1024)); 
console.log(os.freemem()/(1024*1024*1024));
console.log(os.cpus());
console.log(os.cpus().length);
console.log(os.homedir());
console.log(os.platform());
console.log(os.version());