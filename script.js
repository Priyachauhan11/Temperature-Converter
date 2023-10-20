 function convertTemperature() {
    // Get input value
    let celsius = document.getElementById("celsius").value;

    // Check if the input is a number
    if (!isNaN(celsius)) {
        // Convert Celsius to Fahrenheit
        let fahrenheit = (celsius * 9/5) + 32;

        // Display the result
        document.getElementById("result").innerHTML = `${celsius} Celsius is ${fahrenheit.toFixed(2)} Fahrenheit.`;
    } else {
        // Display an error message if the input is not a number
        document.getElementById("result").innerHTML = "Please enter a valid number.";
    }
}