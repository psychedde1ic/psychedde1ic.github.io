document.addEventListener("DOMContentLoaded", function() {
    const terminalText = "Welcome to QuantCom Capital and this Minhajul Abedin";
    let index = 0;
    const speed = 100;
    
    function typeWriter() {
      if (index < terminalText.length) {
        document.getElementById("terminal").innerHTML += terminalText.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      }
    }
    
    typeWriter();
  });
  