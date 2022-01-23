const nconf = require('nconf');


// 위랑 똑같은 기능이다.
//<script src="../vkdf.js"></script>


const os = require('os')


console.log(nconf.env());
console.log(nconf.get('OS'));