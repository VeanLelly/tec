
function insert(num) {
    const maxCharacters = 14;
    let number = document.getElementById("result").innerHTML;
  
    if (number.length >= maxCharacters) {
      return;
    }
  
    document.getElementById("result").innerHTML = number + num;
  }
  
  
  function clean() {
    document.getElementById("result").innerHTML = "";
  }
  
  function calculate() {
    let expression = document.getElementById("result").innerHTML;
  
    try {
      let result = evaluateExpression(expression);
  
      result = result;
  
      document.getElementById("result").innerHTML = result;
    } catch (error) {
      document.getElementById("result").innerHTML = "Erro";
      console.error("Erro ao avaliar a expressão:", error);
    }
  }
  
  function evaluateExpression(expression) {
  
    return eval(expression);
  }
  
  
  function saveNumber() {
    let number = document.getElementById(`result`).innerHTML;
    localStorage.setItem(`numberSaved`, number)
  }
  
  function subtractNumber() {
    let numberSave = localStorage.getItem(`numberSaved`);
    let number = document.getElementById(`result`).innerText;
    let finalNumber = numberSave - number;
    localStorage.setItem(`numberSaved`, finalNumber)
  
  }
  
  function viewSavedNumber() {
    let number = document.getElementById(`result`).innerHTML;
    document.getElementById(`result`).innerHTML = localStorage.getItem(`numberSaved`);
  }
  
  function offSavedNumber() {
    localStorage.removeItem(`numberSaved`);
  }
  
  
  
  