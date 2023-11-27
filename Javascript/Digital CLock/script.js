const clock = document.getElementById('clock');

setInterval(function() {
    const currentDate = new Date();
    const currentTimeString = currentDate.toLocaleTimeString();
    clock.innerHTML = currentTimeString;
}, 1000);
