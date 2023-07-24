// Assignment code here
var myBtn = document.getElementById("generate");
var promptOne = document.querySelector("#customPrompt");
var promptTwo = document.getElementById("secondCustomPrompt");
var promptThree = document.getElementById("thirdCustomPrompt");
var promptFinal = document.getElementById("finalCustomPrompt");
var initialArea = document.getElementById("cardWrapper");
var firstButton = document.getElementById("promptButton");
var secondButton = document.getElementById("promptButtonTwo");
var thirdButton = document.getElementById("promptButtonThree");
var fourthButton = document.getElementById("promptButtonFour");
var upperCase = document.getElementById("upperCase");
var lowerCase = document.getElementById("lowerCase");
var numbers = document.getElementById("numbers");
var symbols = document.getElementById("specialSymbols");
var promptInput = document.getElementById("promptInput");
var theVal = document.getElementById("theValue");
var characterRange = Number(theVal.value);
var cancel = document.getElementById("cancelButton");
var pw = document.getElementById("password");

//Array
var theNumbers= arrayFromLowToHigh(48,57);
var theSymbols= arrayFromLowToHigh(33,47).concat(arrayFromLowToHigh(58,64)).concat(arrayFromLowToHigh(91,96)).concat(arrayFromLowToHigh(123,126));
var theLowerCase= arrayFromLowToHigh(65,90);
var theUpperCase= arrayFromLowToHigh(97,122);
console.log(theNumbers);
console.log(theSymbols);
console.log(theLowerCase);
console.log(theUpperCase);




myBtn.addEventListener ("click", function(e){
  promptOne.style.display = "block";
})

firstButton.addEventListener ("click", function(e){

  if (upperCase.checked !== true && lowerCase.checked !== true && symbols.checked !== true && numbers.checked !== true){
    return window.alert("Please check at least one box");
  }
  if (upperCase.checked != true && lowerCase.checked != true && symbols.checked != true && numbers.checked != true){
    promptOne.style.display = "block";
  }
  if (upperCase.checked != true && lowerCase.checked != true && symbols.checked != true && numbers.checked != true){
    promptTwo.style.display = "none";
  }
  if (upperCase.checked == true || lowerCase.checked == true || symbols.checked == true || numbers.checked == true){
    promptOne.style.display = "none";
  }
  if (upperCase.checked == true || lowerCase.checked == true || symbols.checked == true || numbers.checked == true){
    promptTwo.style.display = "block";
  }
  if (upperCase.checked == true){
    console.log(upperCase.value);
  }
  if (lowerCase.checked == true){
    console.log(lowerCase.value);
  }
  if (symbols.checked == true){
    console.log(symbols.value);
  }
  if (numbers.checked == true){
    console.log(numbers.value);
  }
  if (upperCase.checked == true){
    var createA = document.createElement("li");
    var answers=document.createTextNode("Upper Case");
    createA.appendChild(answers);
    var printAnswers =document.getElementById("myConfirmations");
    printAnswers.appendChild(createA);
  }
  if (lowerCase.checked == true){
    var createA = document.createElement("li");
    var answers=document.createTextNode("Lower Case");
    createA.appendChild(answers);
    var printAnswers =document.getElementById("myConfirmations");
    printAnswers.appendChild(createA);
  }
  if (symbols.checked == true){
    var createA = document.createElement("li");
    var answers=document.createTextNode("Special Symbols");
    createA.appendChild(answers);
    var printAnswers =document.getElementById("myConfirmations");
    printAnswers.appendChild(createA);
  }
  if (numbers.checked == true){
    var createA = document.createElement("li");
    var answers=document.createTextNode("Numbers");
    createA.appendChild(answers);
    var printAnswers =document.getElementById("myConfirmations");
    printAnswers.appendChild(createA);
  }});


  theVal.textContent = promptInput.value;
  promptInput.addEventListener("input", (event) => {
    theVal.textContent = event.target.value;
  });

  secondButton.addEventListener ("click", function(e){
    var numVal = Number(theVal.value);
    console.log(numVal);
    promptTwo.style.display = "none";
    promptThree.style.display = "block";
    var createA = document.createElement("li");
    var answers=document.createTextNode("length = " + numVal + " characters");
    createA.appendChild(answers);
    var printAnswers =document.getElementById("myConfirmations");
    printAnswers.appendChild(createA);
    });

    function arrayFromLowToHigh (low, high) {
      var array = []
      for (let i = low; i <= high; i ++){
        array.push(i)
      }
      return array
    }


    function generatePass (characterRange,includeLowerCase, includeUpperCase,includeNumbers, includeSymbols) {
      let charCodes = ""
      if (includeUpperCase) charCodes= charCodes.concat(theUpperCase)
      if (includeLowerCase) charCodes= charCodes.concat(theLowerCase)
      if (includeNumbers) charCodes= charCodes.concat(theNumbers)
      if (includeSymbols) charCodes= charCodes.concat(theSymbols)
      var passwordCharacters = []
      for (let i = 0; i= characterRange; i++) {
        var characterCode = charCodes[Math.floor(Math.random()*characterRange)]
        passwordCharacters.push(String.fromCharCode(characterCode))
      }
      return passwordCharacters.join('')
  }
  


thirdButton.addEventListener ("click", function(e){
  e.preventDefault();
  promptThree.style.display = "none";
  var includeUpperCase = upperCase.checked;
  var includeLowerCase = lowerCase.checked;
  var includeNumbers = numbers.checked;
  var includeSymbols = symbols.checked;
  console.log(includeLowerCase)
  var finalPassword= generatePass (characterRange,includeLowerCase, includeUpperCase,includeNumbers, includeSymbols);
  password.innerText = finalPassword
  console.log(characterRange);
  });


cancel.addEventListener ("click", function(e){
  promptThree.style.display = "none";
  window.location.reload(true);
})

