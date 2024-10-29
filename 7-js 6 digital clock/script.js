// DIGITAL CLOCK

let currenthour = document.querySelector('.hour');
let currentmin = document.querySelector('.minute');
let currentmsec = document.querySelector('.second');

let ticking = function() {
    let currentdate = new Date();
    let gethour = currentdate.getHours();

    let getmin = currentdate.getMinutes();

    let getsec = currentdate.getSeconds();

    currenthour.textContent = gethour;
    currentmin.textContent = getmin;
    currentmsec.textContent = getsec;
}
setInterval(ticking,1000);