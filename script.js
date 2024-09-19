let counter = 1;
setInterval(function() {
    document.getElementById('img-' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 2000); // Change slides every 5 seconds
