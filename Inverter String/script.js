function inverterString(string) {
    return string.split("").reverse().join("");
  }
  
  function inverter() {
    var inputString = document.getElementById("inputString").value;
    var resultado = inverterString(inputString);
    document.getElementById("resultado").textContent = resultado;
  }
  