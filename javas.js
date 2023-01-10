var randomNumber1=Math.floor(Math.random()*6)+1;

var randomImage1="dice"+randomNumber1+".png";
var randomImageSource1="images/"+randomImage1;
var Image1=document.querySelectorAll("img")[0];
Image1.setAttribute("src",randomImageSource1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomImage2;
var Image2=document.querySelectorAll("img")[1];
Image2.setAttribute("src",randomImageSource2);


if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="🚩 Player 2 Wins";
}
else if (randomNumber2<randomNumber1){
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw!!";
}