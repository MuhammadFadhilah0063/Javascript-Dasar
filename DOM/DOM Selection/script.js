// document.getElementById() -> element
const judul = document.getElementById('judul');

    // Manipulasi HTML
    judul.style.color = 'red';
    judul.style.backgroundColor = '#ccc';
    judul.innerHTML = 'Fadhilah';



// document.getElementsByTagName() -> HTMLCollections
const p = document.getElementsByTagName('p');

for( let i = 0; i < p.length; i++ ) {
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';



// document.getElementsByClassName()
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = ('Ini paragraf 1');



// document.querySelector()
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'salmon';



// document.querySelectorAll()
const pa = document.querySelectorAll('p');

for( let i = 0; i < pa.length; i++ ) {
    pa[i].style.backgroundColor = ('violet');
}


// Node Root
const sectionB = document.getElementById('b');
const paragraf = sectionB.getElementsByTagName('p')[0];
paragraf.style.backgroundColor = 'orange';
