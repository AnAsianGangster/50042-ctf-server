// naive XOR in javascript
var md5 = require('md5')
exports.XOR = (a, b) => {
    return a ^ b;
};
function checkpwd (received, actual){
    received_hash= md5(received)
    actual_hash= md5(actual)
    console.log(received_hash)
    console.log(actual_hash)

    // received_int= parseInt(received_hash,16)
    // actual_int= parseInt(actual_hash,16)
    recv_int =parseHexString(received_hash)
    actual_int=parseHexString(actual_hash)
    c=""
    for (i=0; i< received_hash.length;i++){
        c+=(parseInt(received_hash[i],16) ^ parseInt(actual_hash[i],16)).toString(16)
    }
    // new_int= []
    // for(i=0; i <recv_int.length; i++){
    //     new_int.push(recv_int[i]^ actual_int[i])
    // }
     
    // xor_results= createHexString(new_int)
    console.log(c)
    return c
}

checkpwd("hello","byte");
exports.XOR_check=checkpwd