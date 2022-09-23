var randomNumber1;
var randomNumber2;

randomNumber1=Math.floor(Math.random()*6)+1;
randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImg1="dice" + randomNumber1 + '.png';

var randomImgSource1='images/' + randomDiceImg1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImgSource1);

var randomDiceImg2="dice" + randomNumber2 + '.png';

var randomImgSource2='images/' + randomDiceImg2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImgSource2);
