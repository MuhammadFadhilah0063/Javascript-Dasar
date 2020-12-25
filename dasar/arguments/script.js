function tambah(a, b) {
    var hasil = 0;
    
    for( var i = 0; i < arguments.length; i++ ) {
        hasil += arguments[i];
    }
    return hasil;
}

function kali(a, b) {
    return a*b;
}

var hasil = tambah(1,5,6,7,10,11);
console.log(hasil);

// Fungsi dalam Fungsi

var kali = kali(tambah(1,5,6,7,10,11), tambah(1,5,6,7));
console.log(kali);