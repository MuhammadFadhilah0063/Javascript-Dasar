// Membuat Object Constructor
function Mahasiswa(nama, npm, alamat, jurusan) {
    this.nama = nama;
    this.npm = npm;
    this.alamat = alamat;
    this.jurusan = jurusan;
}


console.log(new Mahasiswa('agus', 2121, 'NTT', 'SI'));

var mhs1 = new Mahasiswa('agus', 2121, 'NTT', 'SI');
console.log(mhs1);

mhs1.npm = 2020;
console.log(mhs1.npm);