var n = Math.floor((Math.random()*6)+1);

var randomImage = "dice"+n+".png";

var randomImageSrc = "images/"+randomImage;

document.querySelector(".img1").setAttribute("src",randomImageSrc);

var m = Math.floor((Math.random()*6)+1);

var randomImage2 = "dice"+m+".png";

var randomImageSrc2 = "images/"+randomImage2;

document.querySelector(".img2").setAttribute("src",randomImageSrc2);


if (n>m){
    document.querySelector("h1").textContent="🚩 Player 1 wins!";
}
else if (m>n){
    document.querySelector("h1").textContent="Player 2 wins! 🚩";
}
else if(m===n){
    document.querySelector("h1").textContent="Draw!";
}

