// forEach
var arr = ['budi', 'agus', 'udin', 'sadi'];

arr.forEach(function(e, i){
    console.log('Nama ke-' + i + ' adalah ' + e);
})

// map (mengembalikan array)
var angka = [1,2,3,6,4,5,6,7,8];

var angka2 = angka.map(function(e){
    return e * 2;
})

console.log(angka2.join(' - '));

// sort array

angka.sort();
console.log(angka.join(' - '));

var angka3 = [1,20,3,6,45,54,6,72,8];
angka3.sort(function(a,b){
    return a-b;
});

console.log(angka3.join(' - '));

// filter
var angka4 = [1,20,3,6,45,54,6,72,8];
var angka5 = angka4.filter(function(a){
    return a > 20;
});

console.log(angka5.join(' - '));

// find 
var angka5 = angka4.find(function(a){
    return a > 20;
});

console.log(angka5);