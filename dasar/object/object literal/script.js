// Membuat Object Literal
var mhs = {
    nama : 'Udin',
    umur : 21,
    ips : [2.00, 2.50, 3.20],
    // Object di dalam object
    alamat : {
        jalan : "A.Yani km 45",
        kota : "BJM",
        prov : "Kalsel"
    }
};

console.log(mhs.nama);
console.log(mhs.umur);
console.log(mhs.ips[2]);
console.log(mhs.alamat.kota);

console.log(mhs["nama"]);
console.log(mhs["alamat"]["kota"]);

mhs.umur = 12; 
console.log(mhs.umur);