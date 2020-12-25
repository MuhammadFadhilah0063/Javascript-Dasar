function cetakAngka(n) {
    if( n === 0 ) {
        return;
    }

    console.log(n);

    return cetakAngka( n - 1 );
}

cetakAngka(10);

// Faktorial

function faktorial(n) {
    if( n === 0 ) return 1;
    return ( n * faktorial(n-1))
}

var hasil = faktorial(5);
console.log(hasil);