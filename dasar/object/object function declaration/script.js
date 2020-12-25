// Membuat Object Function Declaration
function membuatObjectMahasiswa(nama, npm, alamat, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.npm = npm;
    mhs.alamat = alamat;
    mhs.jurusan = jurusan;

    return mhs;
}


console.log(membuatObjectMahasiswa('adil', 1554, 'NTT', 'TI'));

var mhs1 = membuatObjectMahasiswa('budi', 1664, 'Kupang', 'TI');

console.log(mhs1);
