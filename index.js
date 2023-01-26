// getting all the elements from html file
let inputWeight = document.querySelector('#weight');
let inputHeight = document.querySelector('#height');
let calcButton = document.querySelector('#btn-bmicalc');
let container = document.querySelector('.container');

// adding clickeventlistner on calulateBMI button
calcButton.addEventListener("click", function () {
    let weightVal = inputWeight.value;
    let heightVal = inputHeight.value;
    let message;

    // validation of form
    if (weightVal === "")
        alert("Please enter weight");
    else if (heightVal === "")
        alert("Please enter height");
    else if (isNaN(weightVal))
        alert("Please enter a number in weight field");
    else if (isNaN(heightVal))
        alert("Please enter a number in height field");

    // calculating the BMI
    else {
        heightVal = heightVal * 0.01;
        let bmi = (weightVal / (heightVal * heightVal)).toFixed(2)
        if (bmi < 18.5)
            message = "You are underweight";
        else if (bmi >= 18.5 && bmi <= 24.9)
            message = "You are normalweight";
        else if (bmi >= 25 && bmi <= 29.9)
            message = "You are overweight";
        else if (bmi >= 30)
            message = "You are obese";

        // creating div element for showing the BMI result
        let outputDiv = document.createElement('div')
        outputDiv.classList.add("output-div");
        container.appendChild(outputDiv)
        outputDiv.textContent = `Your BMI is ${bmi} ${message}`

        //Adding button to get the recommendation
        let recommendationBtn = document.createElement('button')
        recommendationBtn.classList.add("recommendation-btn")
        outputDiv.appendChild(recommendationBtn)
        recommendationBtn.textContent = 'Read more!'

        // adding clickeventlistner on  recommendationBtn
        recommendationBtn.addEventListener("click", getRecomendation)
        function getRecomendation() {
            // creating div element for health recommendation
            let recommendationDiv = document.createElement('div')
            recommendationDiv.classList.add("recommendation-div")
            outputDiv.appendChild(recommendationDiv)
            outputDiv.removeChild(recommendationBtn);
            if (bmi < 18.5)
                recommendationDiv.textContent = recommendationForUnderWeight;
            else if (bmi >= 18.5 && bmi <= 24.9)
                recommendationDiv.textContent = recommendationForNormalWeight;
            else if (bmi >= 25 && bmi <= 29.9)
                recommendationDiv.textContent = recommendationForOverWeight;
            else if (bmi >= 30)
                recommendationDiv.textContent = recommendationForObese;
        }
        // to remove the entered data from input fields once we have the BMI calculated
        inputWeight.value = '';
        inputHeight.value = '';

        // calling the function to clear the output div once user start entering new value in input field
        inputWeight.addEventListener('input', clearOutput);
        inputHeight.addEventListener('input', clearOutput);

        // function to clear the output div
        function clearOutput() {
            let outputDiv = document.querySelector('.output-div');
            if (outputDiv) {
                container.removeChild(outputDiv);
            }
        }
    }
});


