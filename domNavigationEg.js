// firstElementChild

// const elements= document.getElementById("fruits");
// const fChild=elements.firstElementChild;
// fChild.style.backgroundColor="yellow";


// const ulElements=document.querySelectorAll("ul");
// ulElements.forEach(ulElement =>{
//     const fChild=ulElement.firstElementChild;
//     fChild.style.backgroundColor="yellow";
// })



const elements= document.getElementById("fruits");
const LChild=elements.lastElementChild;
LChild.style.backgroundColor="yellow";



const ulElements=document.querySelectorAll("ul");
ulElements.forEach(ulElement =>{
    const laChild=ulElement.lastElementChild;
    laChild.style.backgroundColor="lightgreen";
})


const selements= document.getElementById("apple");
const nectChild=selements.nextElementSibling;
nectChild.style.backgroundColor="lightred";