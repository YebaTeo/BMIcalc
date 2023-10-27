function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const resultElement = document.getElementById("bmiResult"); // Reference to the result element
    
    if (height && weight) {
        const bmi = weight / Math.pow(height / 100, 2);
        resultElement.textContent = bmi.toFixed(2);

        // Determine and display the BMI category
        if (bmi < 18.5) {
            resultElement.innerHTML += "<br>You are Underweight!";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            resultElement.innerHTML += "<br>You are Normal!";
        } else if (bmi >= 25 && bmi <= 29.9) {
            resultElement.innerHTML += "<br>You are Overweight!";
        } else if (bmi >= 30 && bmi <= 34.9) {
            resultElement.innerHTML += "<br>You are Obese!";
        } else if (bmi > 35) {
            resultElement.innerHTML += "<br>You are Extremely Obese!";
        }
    } else {
        alert("Please enter valid height and weight values.");
    }
}
