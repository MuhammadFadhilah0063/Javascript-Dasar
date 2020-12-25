const close = document.querySelectorAll('.close');

close.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
        // preventDefault() untuk menghentikan fungsi default dari element
        e.preventDefault();
    });
});