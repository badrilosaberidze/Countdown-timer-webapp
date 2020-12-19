var timer;


function pause(){
    document.getElementById("pause").style.display="none";
    document.getElementById("play").style.display="flex";
    let hour=document.getElementById("hour").value;
    let min=document.getElementById("minute").value;
    let sec=document.getElementById("second").value;
    if (hour==""&&min==""&&sec==""){
        return;
    }else{
        clearInterval(timer);
    }
}

function play(){
    document.getElementById("play").style.display="none";
    document.getElementById("pause").style.display="flex";
    let hour=document.getElementById("hour").value;
    let min=document.getElementById("minute").value;
    let sec=document.getElementById("second").value;
    if (hour==0&&min==0&&sec==0){
        return;
    }else{
        timer=setInterval(timerG, 1000);
    }
}

function restart(){
    document.getElementById("minute").value="";
    document.getElementById("second").value="";
    document.getElementById("hour").value="";
    document.getElementById("warn").style.display="none";
    clearInterval(timer);
    document.getElementById("lap-list").innerHTML = "";
}

function start(){
    let hour=document.getElementById("hour").value;
    let min=document.getElementById("minute").value;
    let sec=document.getElementById("second").value;
    document.getElementById("pause").style.display="flex";
    document.getElementById("play").style.display="none";
    if (hour==""&&min==""&&sec==""){
        return;
    }
    timer=setInterval(timerG, 1000);
}

function timerG(){
    let hour=document.getElementById("hour").value;
    let min=document.getElementById("minute").value;
    let sec=document.getElementById("second").value;
    if (sec==0){
        if (min==0){
            if (hour==0){
                clearInterval(timer);
                document.getElementById("hour").value="";
                document.getElementById("minute").value="";
                document.getElementById("second").value="";
                document.getElementById("warn").style.display="flex";
            }else{
                hour--;
                min=59;
                sec=59;
            }
        }else{
            min--;
            sec=59;
        }
    }else{
        sec--;
    }
    document.getElementById("hour").value=hour;
    document.getElementById("minute").value=min;
    document.getElementById("second").value=sec;
}

function addlap(){
    let hour=document.getElementById("hour").value;
    let min=document.getElementById("minute").value;
    let sec=document.getElementById("second").value;
    var node= document.createElement("LI");
    var lap;
    if (hour==0){
        if(min==0){
            if(sec==0){
                return;
            }else{
                lap="0:0:"+sec;
            }
        }else{
            lap="0:"+min+":"+sec;
        }
    }else{
        lap=hour+":"+min+":"+sec;
    }
    var textnode=document.createTextNode(lap);

    node.appendChild(textnode);

    document.getElementById("lap-list").appendChild(node);
}
