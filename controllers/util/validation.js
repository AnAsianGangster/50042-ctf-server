const { hash } = require('bcrypt')
var md5 = require('md5')
const BigNumber = require('bignumber.js')

var xor_str = function(str,K)
    { 
        c = ''; 
        for(i=0; i<str.length; i++) { 
            for(ik=0; ik<K.length; ik++){
                c += String.fromCharCode(str[i].charCodeAt(0).toString(10) ^ key.charCodeAt(0).toString(10)); // XORing with letter 'K' 
            } 
        }
        return c;
    }
function xor(a, b) {
    c=""
    for (i=0; i<a.length;i++){
        c+=String.fromCharCode(a[i].charCodeAt(0).toString(10) ^ b[i].charCodeAt(0).toString(10))

    }
    return c
    }
function parseHexString(str) { 
    var result = [];
    while (str.length >= 8) { 
        result.push(parseInt(str.substring(0, 8), 16));

        str = str.substring(8, str.length);
    }

    return result;
}

function createHexString(arr) {
    var result = "";
    var z;

    for (var i = 0; i < arr.length; i++) {
        var str = arr[i].toString(16);

        z = 8 - str.length + 1;
        str = Array(z).join("0") + str;

        result += str;
    }

    return result;
}
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
    new_int= []
    for(i=0; i <recv_int.length; i++){
        new_int.push(recv_int[i]^ actual_int[i])
    }
     
    xor_results= createHexString(new_int)
    console.log(c)
    console.log(xor_results)
}
checkpwd("hello","byes")