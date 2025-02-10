function Addition(num1, num2) {
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)

  
    var result = num1 + num2;
    document.getElementById("result").textContent = "The sum of " + num1 + " and " + num2 + " is " + result;
   }

   function Subtraction(num1, num2) {
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)

    
    var result = num1 - num2;
    document.getElementById("result").textContent = "The difference of " + num1 + " and " + num2 + " is " + result;
   }

   function Multiplication(num1, num2) {
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)

   
    var result = num1 * num2;
    document.getElementById("result").textContent = "The product of " + num1 + " and " + num2 + " is " + result;
   }

   function Division(num1, num2) {
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)

    
    if (num2 == 0){
        document.getElementById('result').textContent = "Cannot divide by zero";
        return;
    }
    
    var result = num1/num2;
    document.getElementById("result").textContent = "The qoutient of " + num1 + " and " + num2 + " is " + result;
   }

   function Modulus(num1, num2) {
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)

   
    var result = num1 % num2;
    document.getElementById("result").textContent = "The Remainder of " + num1 + " and " + num2 + " is " + result;
   }