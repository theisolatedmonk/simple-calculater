const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const divide = document.createElement('divide');
const four = document.createElement('four');
const five = document.createElement('five');
const six = document.createElement('six');
const multiply = document.createElement('multiply');
const one = document.createElement('one');
const two = document.createElement('two');
const three = document.createElement('three');
const minuse = document.createElement('minuse');
const zero = document.createElement('zero');
const dot = document.createElement('dot');
const equals = document.createElement('equals');
const pluse = document.createElement('pluse');


seven.addEventListener('click', function() {
    seven.innerHTML = 7;
});
eight.addEventListener('click', function() {
    eight.innerHTML = 8;
});
nine.addEventListener('click', function() {
    nine.innerHTML = 9;
    console.log(nine.innerHTML = 9);
});
// nine.addEventListener('click', function() {
//     nine.innerHTML = 9;
// });





// divide.innerHTML = '/';
// four.innerHTML = 4;
// five.innerHTML = 5;
// six.innerHTML = 6;
// multiply.innerHTML = '*';
// one.innerHTML = 1;
// two.innerHTML = 2;
// three.innerHTML = 3;
// minuse.innerHTML = '-';
// zero.innerHTML = '0';
// dot.innerHTML = '.';
// equals.innerHTML = '=';
// pluse.innerHTML = '+';