const close = document.querySelectorAll('.close');

// Cara Lama
// const card = document.querySelectorAll('.card');

// for( let i = 0; i < close.length; i++ ) {
//     close[i].addEventListener('click', function() {
//         card[i].style.display = 'none';
//     });
// }

for( let i = 0; i < close.length; i++ ) {
    close[i].addEventListener('click', function(e) {
        console.log(e);
    });
}


// // Pakai DOM Traversal
// close.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         console.log(e);
//     });
// })

// const a = document.querySelector('span.telp');
// console.log(a.target);