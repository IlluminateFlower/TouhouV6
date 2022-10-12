  // short cut variables
const introBut = document.getElementById("Intro");
const introTxt = document.getElementById("introExplain");
const ccBut = document.getElementById("CharCreate");
const ccTxt = document.getElementById("ccExplain");
const scoreTxt = document.getElementById("scoreTxt");
const specBut = document.getElementById("specBut");
const specTxt = document.getElementById("speciesExplain")
const easyBut = document.getElementById("diffE");
const normBut = document.getElementById("diffN");
const hardBut = document.getElementById("diffH");
const lunaBut = document.getElementById("diffL");
  // Tab open trackers
var introTab = false;
var ccTab = false;
var specTab = false;
  // arbitrary power points
var aPP = 0;
  // choice
var difficulty = null;

  // Intro tab button handler
introBut.addEventListener("click", introHandler);
  // Character Creation button handler
ccBut.addEventListener("click", ccHandler);
  // Species tab handler
specBut.addEventListener("click", specHandler);

  // Event Listeners for the difficulty buttons
easyBut.addEventListener("click", easyAdd);
normBut.addEventListener("click", normAdd);
hardBut.addEventListener("click", hardAdd);
lunaBut.addEventListener("click", lunaAdd);

  // Opens and closes the intro tab
function introHandler(){

  if (introTab == false){
    introTab = true;
    introTxt.style.display = "block";
    introBut.style.backgroundColor = "#9997ff";
  } else {
    introTab = false;
    introTxt.style.display = "none";
    introBut.style.backgroundColor = "#FdFdF8";
  }
}

function ccHandler(){
  if (ccTab == false){
    ccTab = true;
    ccTxt.style.display = "block";
    ccBut.style.backgroundColor = "#9997ff";
  } else {
    console.log("is work");
    ccTab = false;
    specTab = true;
    ccTxt.style.display = "none";
    ccBut.style.backgroundColor = "#FdFdF8";
    specHandler();
  }
}

function specHandler(){
  if (specTab == false){
    specTab = true;
    specTxt.style.display = "block";
    specBut.style.backgroundColor = "#9997ff";
  } else {
    specTab = false;
    specTxt.style.display = "none";
    specBut.style.backgroundColor = "#FdFdF8";
  }
}

  // Difficulty point adders
function easyAdd(){
  if (difficulty !== "easy"){
      switch(difficulty){
          case("normal"):
            aPP -= 12; break;
          case("hard"):
            aPP -= 8; break;
          case("lunatic"):
            aPP -= 4; break;
      }
    aPP += 16;
    difficulty = "easy";
    easyBut.style.backgroundColor = "#ffddff";
    normBut.style.backgroundColor = "#ffd888";
    hardBut.style.backgroundColor = "#ffd888";
    lunaBut.style.backgroundColor = "#ffd888";
  } else if (difficulty == "easy") {
    difficulty = null;
    aPP -= 16;
    easyBut.style.backgroundColor = "#ffd888";
  }
  scoreUpdate();
}

function normAdd(){
  if (difficulty !== "normal"){
    switch(difficulty){
        case("easy"):
          aPP -= 16; break;
        case("hard"):
          aPP -= 8; break;
        case("lunatic"):
          aPP -= 4; break;
      }
    aPP += 12;
    difficulty = "normal";
    easyBut.style.backgroundColor = "#ffd888";
    normBut.style.backgroundColor = "#ffddff";
    hardBut.style.backgroundColor = "#ffd888";
    lunaBut.style.backgroundColor = "#ffd888";
  } else if (difficulty == "normal"){
    difficulty = null;
    aPP -= 12;
    normBut.style.backgroundColor = "#ffd888";
  }
  scoreUpdate();
}

function hardAdd(){
  if (difficulty !== "hard"){
    switch(difficulty){
        case("easy"):
          aPP -= 16; break;
        case("normal"):
          aPP -= 12; break;
        case("lunatic"):
          aPP -= 4; break;
    }
    aPP += 8;
    difficulty = "hard";
    easyBut.style.backgroundColor = "#ffd888";
    normBut.style.backgroundColor = "#ffd888";
    hardBut.style.backgroundColor = "#ffddff";
    lunaBut.style.backgroundColor = "#ffd888";
  } else if (difficulty == "hard") {
    difficulty = null;
    aPP -= 8;
    hardBut.style.backgroundColor = "#ffd888";
  }
  scoreUpdate();
}

function lunaAdd(){
  if (difficulty !== "lunatic"){
    switch(difficulty){
        case("easy"):
          aPP -= 16; break;
        case("normal"):
          aPP -= 12; break;
        case("hard"):
          aPP -= 8; break;
    }
    aPP += 4;
    difficulty = "lunatic";
    easyBut.style.backgroundColor = "#ffd888";
    normBut.style.backgroundColor = "#ffd888";
    hardBut.style.backgroundColor = "#ffd888";
    lunaBut.style.backgroundColor = "#ffddff";
  } else if (difficulty == "lunatic"){
    difficulty = null;
    aPP -= 4;
    lunaBut.style.backgroundColor = "#ffd888";
  }
  scoreUpdate();
}

  // Score text update
function scoreUpdate(){
  scoreTxt.innerHTML = "aPP: " + aPP;
}