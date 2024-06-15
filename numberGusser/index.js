const min=1;
const max=100;
const ans=Math.floor(Math.random()*(max-min+1)) + min;
// console.log(ans);
let attempts = 0;
let guess;
let running = true;


while (running) {
    console.log("answer is :",ans)
    attempts=attempts+1;
    guess=window.prompt(`Guess a number betwwn ${min} and ${max}`);
    if ("q"==guess) {
        running=false;
    }
    guess=Number(guess)
    // console.log(`output `,typeof guess,guess)
    if (guess===ans) {
        window.alert(`you won on attempt number${attempts}`);
        running=false;
    } 
}
