document.body.style.backgroundColor = ('#eaeae');

// Menambahkan element dengan appendChild()
    // buat element baru
    const pBaru = document.createElement('p');

    // buat tulisan baru
    const teksPBaru = document.createTextNode('Paragraf Baru');

    // Simpan tulisan ke paragraf baru atau merangkai
    pBaru.appendChild(teksPBaru);

    const sectionA = document.getElementById('a');

    // simpan pBaru ke section A
    sectionA.appendChild(pBaru);


                // Menambahkan element dengan insertBefore()
                    // buat element baru
                    const liBaru = document.createElement('li');

                    // buat tulisan baru
                    const teksLiBaru = document.createTextNode('Item Baru');

                    // Simpan tulisan ke li baru atau merangkai
                    liBaru.appendChild(teksLiBaru);

                    // ambil parent elementnya
                    const ul = document.querySelector('section#b ul');

                    // ambil child sesudahnya
                    const li2 = ul.querySelector('li:nth-child(2)');

                    // simpan pBaru ke section b
                    ul.insertBefore(liBaru, li2);


// menghapus child dengan removeChild()
// Tangkap parentnya
// Tangkap element yg akan dihapus
const link = document.getElementsByTagName('a')[0];

// Menghapus
sectionA.removeChild(link);


// mengganti child dengan replaceChild()
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('Ini H2 baru');
h2Baru.appendChild(textH2Baru);

sectionB.replaceChild(h2Baru, p4);