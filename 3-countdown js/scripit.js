const enddate = "30 August 2023 12:00 AM";
document.getElementById("enddate").innerText = enddate;
const inputs = document.querySelectorAll("input");

let ticking = function() {
    const end = new Date(enddate);
    const now = new Date();
    const diff = (end - now)/1000;
    if(diff < 0) return;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor((diff / 3600)%24);
    inputs[2].value = Math.floor((diff / 60 )% 60);
    inputs[3].value = Math.floor((diff)% 60);
}
setInterval(ticking,1000);