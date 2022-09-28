  //Display answers in the buttons
  var body = document.getElementById("body");
  var contactDiv = document.getElementById("contact");


function overflow(){
    body.setAttribute("class", "overflow");
}

function hideOverflow(){
    body.setAttribute("class", "");
}

function openContact(){
    contactDiv.setAttribute("class", "contact");
}

function closeContact(){
    contactDiv.setAttribute("class", "hidden");
}

function closeAll(){
    closeContact()
}