document.getElementById('bmi-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const gender = document.getElementById('gender').value;
    const heightUnit = document.getElementById('height-unit').value;
    let height;
    
    if (heightUnit === 'cm') {
        height = document.getElementById('height-cm').value;
    } else {
        const feet = document.getElementById('height-ft').value || 0;
        const inches = document.getElementById('height-in').value || 0;
        height = (parseFloat(feet) * 30.48) + (parseFloat(inches) * 2.54);
    }
    
    const weight = document.getElementById('weight').value;
    
    if (height > 0 && weight > 0 && gender) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        document.getElementById('bmi-value').innerText = bmi;
        const category = getBMICategory(bmi, gender);
        document.getElementById('bmi-category').innerText = category;
        
        if (category === "Normal weight") {
            document.getElementById('bmi-category').innerText += " - Bhai be fit like this!";
        } else if (category === "Underweight") {
            document.getElementById('bmi-category').innerText += " - Bhai khana kha le!";
        } else if (category === "Overweight") {
            document.getElementById('bmi-category').innerText += " - Exercise kar le!";
        } else if (category === "Obese") {
            document.getElementById('bmi-category').innerText += " - Bhai, thoda dhyan dena padega!";
        }
    } else {
        alert('Please enter valid height, weight, and gender.');
    }
});

document.getElementById('height-unit').addEventListener('change', function() {
    const heightUnit = this.value;
    const cmInput = document.getElementById('height-cm').parentElement;
    const ftInput = document.getElementById('height-ft').parentElement;
    const inInput = document.getElementById('height-in').parentElement;
    
    if (heightUnit === 'cm') {
        cmInput.style.display = 'block';
        ftInput.style.display = 'none';
        inInput.style.display = 'none';
        document.getElementById('height-cm').required = true;
        document.getElementById('height-ft').required = false;
        document.getElementById('height-in').required = false;
    } else {
        cmInput.style.display = 'none';
        ftInput.style.display = 'block';
        inInput.style.display = 'block';
        document.getElementById('height-cm').required = false;
        document.getElementById('height-ft').required = true;
        document.getElementById('height-in').required = true;
    }
});

function getBMICategory(bmi, gender) {
    let category = '';

    if (gender === 'male' || gender === 'female') {
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal weight";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
        } else {
            category = "Obese";
        }
    }

    return category;
}

