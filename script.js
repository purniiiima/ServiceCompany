//form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const principal = parseFloat(document.getElementById('principal').value);
        const rate = parseFloat(document.getElementById('rate').value);
        const time = parseFloat(document.getElementById('time').value);
        const result = calculateInvestment(principal, rate, time);
        alert(`Your total investment after ${time} years will be $${result.toFixed(2)}`);
    });
});


//calculator
document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', function() {
        const initialInvestment = parseFloat(document.getElementById('initial-investment').value);
        const annualReturnRate = parseFloat(document.getElementById('annual-return').value) / 100;
        const investmentPeriod = parseInt(document.getElementById('investment-period').value);

        const futureValue = calculateFutureValue(initialInvestment, annualReturnRate, investmentPeriod);
        resultDiv.textContent = `Future Value: $${futureValue.toFixed(2)}`;
    });

    function calculateFutureValue(initialInvestment, annualReturnRate, investmentPeriod) {
        const futureValue = initialInvestment * Math.pow(1 + annualReturnRate, investmentPeriod);
        return futureValue;
    }
});


//comparison
document.getElementById("compare-btn").addEventListener("click", function() {
    const funds = [];
    document.querySelectorAll('.fund-checkboxes input[type="checkbox"]:checked').forEach(function(checkbox) {
        funds.push(checkbox.value);
    });


    const resultElement = document.getElementById("comparison-result");
    resultElement.innerHTML = "<h3>Selected Funds for Comparison:</h3>";
    if (funds.length > 0) {
        resultElement.innerHTML += "<ul>";
        funds.forEach(function(fund) {
            resultElement.innerHTML += "<li>" + fund + "</li>";
        });
        resultElement.innerHTML += "</ul>";
    } else {
        resultElement.innerHTML += "<p>No funds selected for comparison.</p>";
    }
});
