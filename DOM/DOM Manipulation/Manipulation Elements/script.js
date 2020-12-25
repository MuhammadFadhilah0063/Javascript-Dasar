// Attribut 
const judul = document.getElementById('judul');

const a = judul.getAttribute('id');
console.log(a);
judul.setAttribute('name', 'judul');
judul.removeAttribute('name');


// Class
const p2 = document.querySelector('.p2');
p2.classList.add('label');
p2.classList.remove('label');

// Toggle, jika nama class belum ada maka akan ditambahkan, jika tidak ada yang sama maka akan dihapus
p2.classList.toggle('label');

// item untuk mengetahui ada kelas apa aja di dalam element
// p2.classList.item();

// contains untuk menanyakan, apakah ada kelas dengan nama tertentu di dalam element tersebut
// p2.classList.contains('label');


// replace untuk mengganti nama class
p2.classList.replace('label', 'satu');