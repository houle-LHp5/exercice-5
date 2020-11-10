
cont pText = document.getElementById(pText);
cont buttonPink = document.getElementById(buttonPink);
cont buttonBlue = document.getElementById(buttonBlue);
cont buttonPurple = document.getElementById(buttonPurple);
cont buttonBold = document.getElementById(buttonBold);
cont buttonItalic = document.getElementById(buttonItalic);

buttonPink.onclick = function(){
    //pText.setAttribute("class", "pink");
    pText.style.color = "pink";
}

buttonBlue.onclick = function(){
    //pText.setAttribute("class", "blue");
    pText.style.color = "blue";
}

buttonPurple.onclick = function(){
    //pText.setAttribute("class", "purple");
    pText.style.color = "purple";
}

buttonBold.onclick = function(){
    pText.classList.toggle("bold");
}

buttonItalic.onclick = function(){
    pText.classList.toggle("italic");
}