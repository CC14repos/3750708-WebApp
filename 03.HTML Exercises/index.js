alert("Intayun Agsisiwit"); 

function appendToDisplay(value) {
  document.getElementById('calc').value += value;
}

function clearDisplay() {
  document.getElementById('calc').value = '';
}

function calculateResult() {
  const displayValue = document.getElementById('calc').value;
  try {
    const result = eval(displayValue);
    document.getElementById('calc').value = result;
  } catch (error) {
    document.getElementById('calc').value = 'Error';
  }
}

