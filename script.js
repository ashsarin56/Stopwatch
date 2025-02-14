let pause=document.querySelector(".btn.pause");
let start=document.querySelector(".btn.start");
let reset=document.querySelector(".btn.reset");
let display=document.querySelector(".main");
let min=0,sec=0,hrs=0;
let interval=null,running=false;
function upd(){
    display.innerHTML=(`${hrs.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`);
}
function func(){
    sec++;
    if(sec===60){sec=0;min++;}
    if(min===60){min=0;hrs++;}
    if(hrs===12){hrs=0;}
     upd();
}
start.addEventListener('click',function(){
    if(!running){
        interval=setInterval(func,1000);
        running=true;
    }
});

pause.addEventListener('click',function(){
    clearInterval(interval);
    running=false;
});

reset.addEventListener('click',function(){
    clearInterval(interval);
    hrs=0;min=0;sec=0;
    upd();
    running=false;
});
