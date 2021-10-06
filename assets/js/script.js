  //Display answers in the buttons
  var contactDiv = document.getElementById("contact");
  var experienceDiv = document.getElementById("experience");
  var portfolioDiv = document.getElementById("portfolio");
  var project1 = document.getElementById("projectInfo1");
  var project2 = document.getElementById("projectInfo2");
  var project3 = document.getElementById("projectInfo3");
  var project4 = document.getElementById("projectInfo4");

function openContact(){
    closeExperience();
    closeProjects();
    closePortfolio();
    contactDiv.setAttribute("class", "contact");

}

function closeContact(){
    contactDiv.setAttribute("class", "hidden");
}

function openExperience(){
    closeContact();
    closeProjects();
    closePortfolio();
    experienceDiv.setAttribute("class", "experience");

}

function closeExperience(){
    experienceDiv.setAttribute("class", "hidden");
}

function openPortfolio(){
    closeContact();
    closeExperience();
    portfolioDiv.setAttribute("class", "portfolio")
}

function closePortfolio(){
    closeProjects();
    portfolioDiv.setAttribute("class", "hidden");

}

function openProject1(){
    project1.setAttribute("class", "projectInfo");
}

function openProject2(){
    project2.setAttribute("class", "projectInfo");
}

function openProject3(){
    project3.setAttribute("class", "projectInfo");
}

function openProject4(){
    project4.setAttribute("class", "projectInfo");
}

function closeProjects(){
    project1.setAttribute("class", "hidden");
    project2.setAttribute("class", "hidden");
    project3.setAttribute("class", "hidden");
    project4.setAttribute("class", "hidden");
}

function closeAll(){
    project1.setAttribute("class", "hidden");
    project2.setAttribute("class", "hidden");
    project3.setAttribute("class", "hidden");
    project4.setAttribute("class", "hidden");
    closeExperience();
    closeProjects();
    closePortfolio();
    closeContact()
}