const os = require('os');

//운영체제에서 End Of the Line 이 무엇인지 확인
console.log(os.EOL === '\r\n');


//최종메모리
console.log(os.totalmem());
//사용가능한 메모리
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
//cpu 
console.log(os.cpus());
console.log(os.homedir());
console.log(os.hostname());