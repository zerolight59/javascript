// counter prograam

const dec = document.getElementById("decBtn");
const reset=document.getElementById("resetBtn");
const inc=document.getElementById("incBtn");
const countLabel=document.getElementById("countlabel");

let count=0;

inc.onclick=function() {
    count++;
    countLabel.textContent =count;
}
dec.onclick=function() {
    count--;
    countLabel.textContent =count;
}
reset.onclick=function() {
    count=0;
    countLabel.textContent =count;
}