// firstElementChild

// const elements= document.getElementById("fruits");
// const fChild=elements.firstElementChild;
// fChild.style.backgroundColor="yellow";


// const ulElements=document.querySelectorAll("ul");
// ulElements.forEach(ulElement =>{
//     const fChild=ulElement.firstElementChild;
//     fChild.style.backgroundColor="yellow";
// })



// const elements= document.getElementById("fruits");
// const LChild=elements.lastElementChild;
// LChild.style.backgroundColor="yellow";



// const ulElements=document.querySelectorAll("ul");
// ulElements.forEach(ulElement =>{
//     const laChild=ulElement.lastElementChild;
//     laChild.style.backgroundColor="lightgreen";
// })


// const selements= document.getElementById("vegetables");
// const nectChild=selements.nextElementSibling;
// nectChild.style.backgroundColor="lightgreen";



// const pelements= document.getElementById("vegetables");
// const preChild=selements.previousElementSibling;
// preChild.style.backgroundColor="orange";




//  const parElements = document.getElementById("ice");
//  const ParentEle= parElements.parentElement;
//  ParentEle.style.backgroundColor="skyblue"




const cElements = document.getElementById("fruits");
const childrenEle= cElements.children;
Array.from(childrenEle).forEach(child=>{
    child.style.backgroundColor="orange"
})
childrenEle[1].style.backgroundColor="black";
childrenEle[1].style.color="blue"