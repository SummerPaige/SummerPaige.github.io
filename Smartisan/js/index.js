//carous.js

var aPics=document.getElementsByClassName("pic");
var aDots=document.getElementsByClassName("dot");


var index=0;

show();
function show(){
    if(index <0) index=aPics.length;
    if(index >=aPics.length) index=0;

    for(let i=0;i<aPics.length ;i++){
        aPics[i].style.display="none";
        aDots[i].style.backgroundColor="#717171";
    }
    aPics[index].style.display="block";
    aDots[index].style.backgroundColor="white";
}

for(let i=0;i<aDots.length ;i++){
    aDots[i].onclick=function(){
        index=i;
        show();//有一个bug是，当想点击的时候仍然在自动播放，因为dot不在oPicW容器里面。
              //dot是绝对定位上去的，所以onmouseover的时候停止定时器无用。
    }
}
function autoPlay(){
    index+=1;
    show();
}

var timer=null;
timer =setInterval(autoPlay,3000);

/*oPicw.onmouseout=function(){
    timer =setInterval(autoPlay,2000);
}*/

/*
oPicw.onmouseover=function(){ //鼠标放在图片上时，停止自动播放。
    clearInterval(timer);
}*/
//左右运动
var oLeft=document.getElementById("left");
var oRight=document.getElementById("right");
var oUl=document.getElementById("trans");


var flag=true;//x最小了

oRight.onclick=function(){
    if(flag){
        oUl.style.transform="translate(-1220px, 0px)";
        oUl.style.transition="transform 0.5s"
        oRight.classList.remove("active");
        oRight.classList.add("disabled");
        oLeft.classList.remove("disabled");
        oLeft.classList.add("active");
    }else{
        oUl.style.transform="translate(0px, 0px)";
        flag=false;
    }
}

oLeft.onclick=function(){
    if(flag){
        oUl.style.transform="translate(0px, 0px)";
        oLeft.classList.remove("active");
        oLeft.classList.add("disabled");
        oRight.classList.remove("disabled");
        oRight.classList.add("active");
    }else{
        oUl.style.transform="translate(1220px, 0px)";
        flag=true;
    }
}
  var oPhone=document.getElementById("phone");
  var oItemChildren=document.getElementById("itemChildren");

oPhone.onmouseover=function(){
    oItemChildren.style.display="block";
}

oItemChildren.onmouseover=function(){
    oItemChildren.style.display="block";
}

oItemChildren.onmouseout=function(){
    oItemChildren.style.display="none";
}

