let count = 0;

function increment() {
    count++;

    document.getElementById('counter').innerHTML = count;
}

function reset() {
    count = 0;
    
    document.getElementById('counter').innerHTML = count;
}