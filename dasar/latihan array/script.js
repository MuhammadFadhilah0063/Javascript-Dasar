var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    // Jika angkot kosong
    if( penumpang.length == 0 ) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // Kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        // Telusuri seluruh kursi dari awal
        for( var i = 0; i < penumpang.length; i++ ) {
            // Jika ada kursi kosong
            if ( penumpang[i] == undefined ) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // Kembalikan isi array & keluar dari function
                return penumpang;
            }
        
            // Jika sudah ada nama penumpang yang sama
            else if ( penumpang[i] == namaPenumpang )  {  
                // Tampilkan pesan kesalahan
                console.log(namaPenumpang + ' sudah ada di dalam angkot!');
                // Kembalikan isi array & keluar dari function
                return penumpang;
            } 

            // Jika seluruh kursi terisi
            else if ( i == penumpang.length - 1 ) {
                // Tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // Kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang) {
    // Jika angkot kosong
    if ( penumpang.length == 0 ) {
        console.log('Angkot kosong mas');
    } else {
    
        // Telusuri isi angkot
        for ( var i = 0; i < penumpang.length; i++ ) {
            // Jika ada nama penumpang sesuai
            if ( penumpang[i] == namaPenumpang ) {
                penumpang[i] = undefined;
                // Kembalikan isi array & keluar dari function
                return penumpang;
            }

            // Jika tidak ada nama yang sesuai
            else if ( i == penumpang.length -1 ) {
                console.log(namaPenumpang + ' Tidak ada di angkot coy.');
            }
        }
    }

    return penumpang;
}