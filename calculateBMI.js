function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const resultElement = document.getElementById("bmiResult"); // Reference to the result element
    const name = document.getElementById("name").value; // Get the name input
    if (height && weight) {
        const bmi = weight / Math.pow(height / 100, 2);
        resultElement.textContent = bmi.toFixed(2);
        document.getElementById("displayName").textContent = name; // Display the name
        // Determine and display the BMI category
        if (bmi < 18.5) {
            resultElement.innerHTML += '<br>You are <span class = "bg-info">Underweight!</span>';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            resultElement.innerHTML += '<br>You are <span class = "bg-primary">Normal!</span>';
        } else if (bmi >= 25 && bmi <= 29.9) {
            resultElement.innerHTML += '<br>You are <span class = "bg-warning">Overweight!</span>';
        } else if (bmi >= 30 && bmi <= 34.9) {
            resultElement.innerHTML += '<br>You are <span class = "bg-danger">Obese!</span>';
        } else if (bmi > 35) {
            resultElement.innerHTML += '<br>You are <span class = "bg-danger">Extremely Obese!</span>';
        }
    } else {
        alert("Please enter valid height and weight values.");
    }
}
