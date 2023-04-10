var randomNumber1= Math.floor(Math.random()*6+1);
console.log(randomNumber1);
document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");


var randomNumber2= Math.floor(Math.random()*6+1);
console.log(randomNumber2);
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="1st won the match";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="2nd won the match";
}
else{
    document.querySelector("h1").innerHTML="Draw match";
}