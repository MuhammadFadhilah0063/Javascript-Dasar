// IIFE OR SIAF
// cara lama untuk mengakali variabel function
(function() {
    for( var i = 0; i < 10; i++ ) {
        console.log(i);
    }
    console.log('\n');
}());


// Let
for( let i = 0; i < 10; i++ ) {
    console.log(i);
};


// Const -> untuk meminimalisir menimpa-nimpa variabel
const i = 10;
// i = 15 -> tidak bisa

const mhs = {
    nama : 'usin',
    umur : 21
};

// bisa diubah, karena hanya properti objectnya yg diubah
mhs.umur = 22;