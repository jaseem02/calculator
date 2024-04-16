var x=document.getElementById("input");
var y=document.getElementById("number_div")

function num1(){
    x.value+=1;
}
function num2(){
    x.value+=2;
}
function num3(){
    x.value+=3;
}
function num4(){
    x.value+=4;
}
function num5(){
    x.value+=5;
}
function num6(){
    x.value+=6;
}
function num7(){
    x.value+=7;
}
function num8(){
    x.value+=8;
}
function num9(){
    x.value+=9;
}
function num0(){
    x.value+=0;
}
function reset(){
    x.value='';
}
function plus(){
    x.value+="+";
}
function minus(){
    x.value+="-";
}
function division(){
    x.value+="/";
}
function mul(){
    x.value+="*";
}
function point(){
    x.value+=".";
}
function del(){
    x.value=x.value.toString().slice(0,-1);
}
function equal(){
    x.value=eval(x.value);
}
function theme_change(){
    x.style.backgroundColor="white";
    y.style.backgroundColor="white";
    document.getElementById("7").style.backgroundColor="rgb(37, 37, 57)"
    document.getElementById("8").style.backgroundColor="rgb(37, 37, 57)"
    document.getElementById("9").style.backgroundColor="rgb(37, 37, 57)"
    document.getElementById("6").style.backgroundColor="rgb(37, 37, 57)"
    document.getElementById("5").style.backgroundColor="rgb(37, 37, 57)"
    document.getElementById("4").style.backgroundColor="rgb(37, 37, 57)"
    document.getElementById("3").style.backgroundColor="rgb(37, 37, 57)"
    document.getElementById("2").style.backgroundColor="rgb(37, 37, 57)"
    document.getElementById("1").style.backgroundColor="rgb(37, 37, 57)"
    document.getElementById("0").style.backgroundColor="rgb(37, 37, 57)"
    document.getElementById("point_id").style.backgroundColor="rgb(37, 37, 57)"
    document.getElementById("7").style.color="white"
    document.getElementById("8").style.color="white"
    document.getElementById("9").style.color="white"
    document.getElementById("6").style.color="white"
    document.getElementById("5").style.color="white"
    document.getElementById("4").style.color="white"
    document.getElementById("3").style.color="white"
    document.getElementById("2").style.color="white"
    document.getElementById("1").style.color="white"
    document.getElementById("0").style.color="white"
    document.getElementById("point_id").style.color="white"
    document.getElementById("moon").src="./sun.png"
}