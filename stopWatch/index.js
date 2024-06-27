const disp=document.getElementById("display");
let timer =null;
let startTime=0;
let elepsedTime=0;
let isRunning=false;

function start(params) {
    if (!isRunning) {
        startTime=Date.now()-elepsedTime;
        timer=setInterval(update,10);
        isRunning=true;
    }
    // console.log(startTime)
}

function stop(params) {
    if (isRunning) {
        clearInterval(timer);
        elepsedTime=Date.now()-startTime;
        isRunning=false;
    }
}

function reset(params) {
    clearInterval(timer)
    startTime=0;
    elepsedTime=0;
    isRunning=false;
    disp.textContent="00:00:00:00"
}

function update(params) {
    const currentTime=Date.now();
    elepsedTime=currentTime-startTime;

    let h=Math.floor(elepsedTime / (1000 * 60 *60));
    let m=Math.floor(elepsedTime / (1000 * 60)%60);
    let s=Math.floor(elepsedTime / 1000 %60);
    let ms=Math.floor(elepsedTime % 1000 / 10);

    h=String(h).padStart(2,0);
    m=String(m).padStart(2,0)
    s=String(s).padStart(2,0)
    ms=String(ms).padStart(2,0)

    disp.textContent=`${h}:${m}:${s}:${ms}`;
}