// const close = document.querySelectorAll('.close');

// close.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         // preventDefault() untuk menghentikan fungsi default dari element
//         e.preventDefault();
//         // stopPropagation() untuk menghentikan event bubble agar event berakhir dan tidak berpengaruh kepada event lain...
//         e.stopPropagation();
//     });
// });

// const cards = document.querySelectorAll('.card');

// cards.forEach(function(card) {
//     card.addEventListener('click', function(e) {
//         alert('OKOK');
//     });
// });

// Event Bubble adalah suatu keadaan default, jika terdapat beberapa event dalam satu html dan tidak terdapat fungsi stopPropaganation(),
// maka event yang satu akan menimpa dan berjalan setelah event satu dijalankan.


// Menggunakan event di dalam container
const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    if( e.target.className == 'close' ) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});