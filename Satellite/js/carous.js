
window.onload=function(){

    //轮播图
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var oPic=document.getElementById("pic");
    var preBtn=document.getElementById("pre");
    var nextBtn=document.getElementById("next");

    var slideIndex = 1;//slideIndex为全局变量，控制点击span和大于小于号时，变化的都是slideIndex
    Show();//初始化，让第一张显示出来。

    function Show() {
        if (slideIndex < 1) {
            slideIndex = slides.length;
        }//小于1则转到最后
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }//最后则转到开头
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; //设置所有为none
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");//后者去代替前者,全部样式为0；
        }
        slides[slideIndex - 1].style.display = "block";//index为多少，相应的那个就显示出来。
        dots[slideIndex - 1].className += " active";//对应的小圆点就active.
    }

    function  dotShow(n){ //小圆点对应的show
        slideIndex=n;
        Show();
    }

    function plusShow(n){ //左右点对应的show
        slideIndex+=n
        Show();
    }

    function plus(){  //自动播放对应的show
        slideIndex+=1;
        Show();
    }

    var timer=null;
    timer=setInterval(plus,3000);
    function autoPlay() {
         timer=setInterval(plus,3000);
    }
    function stop() {
        clearInterval(timer);
    }


    oPic.onmouseover=function(){
        stop();
    }

    oPic.onmouseout=function(){
        autoPlay();
    }

    preBtn.onclick=function(){
        plusShow(-1);
    };
    nextBtn.onclick=function(){
        plusShow(1);
    };

    for(let i=0;i<dots.length;i++){
        dots[i].onclick = function(){
            dotShow(i+1);
        }
    }

}




