// Menampilkan isi array
var arr = ['budi', 'agus', 'udin', 'sadi'];

console.log(arr.join(' - '));

// Menambah isi array

    // array di akhir
    arr.push('Adi');
    console.log(arr.join(' - '));

    // array di awal
    arr.unshift();
    console.log(arr.join(' - '));

// Menghapus isi array

    // array di akhir
    arr.pop();
    console.log(arr.join(' - '));

    // array di awal
    arr.shift();
    console.log(arr.join(' - '));

// Menyisipkan isi array

    // splice(indexAwal, mauDihapusBerapa, elemenBaru....)
    arr.splice(2, 0, 'bagus', 'rahmat');
    console.log(arr.join(' - '));

    arr.splice(3, 1, 'hilal');
    console.log(arr.join(' - '));

// Mengiris isi array

    // slice(awal, akhir)
    var arr2 = arr.slice(2,4);
    arr.splice(2, 0, 'bagus', 'rahmat');
    console.log(arr2.join(' - '));
