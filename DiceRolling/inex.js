
function rollDice() {
    const num= document.getElementById("rollNumber").value;
    const resNum= document.getElementById("DiceResult");
    const resImg= document.getElementById("DiceImage");
    const values=[];
    const images=[];
    for(let i=0;i<num;i++){
        const value = Math.floor(Math.random() * 6)+1;
        // console.log(value);
        values.push(value)
        images.push(`<img src="images/${value}.png">`)
    }
    resNum.textContent=`Dice : ${values.join(", ")}`;
    resImg.innerHTML = images.join(" ")
}