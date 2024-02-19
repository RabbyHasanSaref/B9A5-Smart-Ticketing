function setElementValueById(elementId, value) {
    document.getElementById(elementId).innerText = value;
  }
  
  function totalPrice(id, value) {
    const totalPrice = document.getElementById(id).innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    const sum = convertedTotalPrice + parseInt(value);
    setElementValueById(id, sum);
  }
  
  function getInputValueById(elementId) {
    const input = document.getElementById(elementId);
    const inputValue = input.value;
    return inputValue;
  }