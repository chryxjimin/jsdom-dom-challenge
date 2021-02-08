var counter = 0

function setUp() {
    var timer = document.querySelector('h1#timer');
    timer.innerHTML('0');

    function timeIt(){
    counter++;
    timer.innerHTML(counter);
}

setInterval(timeIt, 1000);
}