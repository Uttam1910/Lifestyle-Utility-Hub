// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Tip Calculator
  const calcTipBtn = document.getElementById("calcTipBtn");
  if (calcTipBtn) {
    calcTipBtn.addEventListener("click", function () {
      const billAmount = parseFloat(
        document.getElementById("billAmount").value
      );
      const tipPercentage = parseFloat(
        document.getElementById("tipPercentage").value
      );
      const numPeople = parseInt(document.getElementById("numPeople").value);

      if (isNaN(billAmount) || billAmount <= 0) {
        alert("Please enter a valid bill amount.");
        return;
      }
      if (isNaN(numPeople) || numPeople < 1) {
        alert("Please enter a valid number of people.");
        return;
      }

      const tipAmount = billAmount * (tipPercentage / 100);
      const totalAmount = billAmount + tipAmount;
      const totalPerPerson = totalAmount / numPeople;

      document.getElementById("tipAmountResult").innerText =
        "Tip Amount: $" + tipAmount.toFixed(2);
      document.getElementById("totalPerPersonResult").innerText =
        "Total Per Person: $" + totalPerPerson.toFixed(2);
      document.getElementById("tipResult").style.display = "block";
    });
  }

  // Currency Converter
  const convertBtn = document.getElementById("convertBtn");
  if (convertBtn) {
    convertBtn.addEventListener("click", function () {
      const amountUSD = parseFloat(document.getElementById("amountUSD").value);
      const convertTo = document.getElementById("convertTo").value;

      if (isNaN(amountUSD) || amountUSD <= 0) {
        alert("Please enter a valid amount in USD.");
        return;
      }

      // Fixed conversion rates for demonstration purposes
      const rates = {
        EUR: 0.85,
        GBP: 0.75,
        JPY: 110,
      };
      const converted = amountUSD * rates[convertTo];
      document.getElementById("convertedAmount").innerText =
        "Converted Amount: " + converted.toFixed(2) + " " + convertTo;
      document.getElementById("conversionResult").style.display = "block";
    });
  }

  // BMI Calculator
  const calcBmiBtn = document.getElementById("calcBmiBtn");
  if (calcBmiBtn) {
    calcBmiBtn.addEventListener("click", function () {
      const weight = parseFloat(document.getElementById("weight").value);
      const heightCm = parseFloat(document.getElementById("height").value);

      if (isNaN(weight) || weight <= 0) {
        alert("Please enter a valid weight.");
        return;
      }
      if (isNaN(heightCm) || heightCm <= 0) {
        alert("Please enter a valid height.");
        return;
      }

      const heightM = heightCm / 100;
      const bmi = weight / (heightM * heightM);
      let category = "";

      if (bmi < 18.5) {
        category = "Underweight";
      } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight";
      } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
      } else {
        category = "Obesity";
      }

      document.getElementById("bmiValue").innerText = "BMI: " + bmi.toFixed(2);
      document.getElementById("bmiCategory").innerText =
        "Category: " + category;
      document.getElementById("bmiResult").style.display = "block";
    });
  }
});

// Social Sharing via Email
function shareByEmail() {
  const subject = "Check out the Lifestyle Utility Hub!";
  const body =
    "I found this amazing Lifestyle Utility Hub offering free tools and resources. Check it out: https://www.example.com";
  window.location.href =
    "mailto:?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);
}

// Toggle the full-screen overlay navigation
document
  .getElementById("mobile-menu-icon")
  .addEventListener("click", function () {
    document.getElementById("overlay-menu").classList.add("active");
  });

document.getElementById("overlay-close").addEventListener("click", function () {
  document.getElementById("overlay-menu").classList.remove("active");
});

// Loan Calculator Functionality
document.getElementById("calcLoanBtn").addEventListener("click", function () {
  var loanAmount = parseFloat(document.getElementById("loanAmount").value);
  var annualInterestRate = parseFloat(
    document.getElementById("annualInterestRate").value
  );
  var loanTerm = parseFloat(document.getElementById("loanTerm").value);

  if (
    isNaN(loanAmount) ||
    loanAmount <= 0 ||
    isNaN(annualInterestRate) ||
    annualInterestRate <= 0 ||
    isNaN(loanTerm) ||
    loanTerm <= 0
  ) {
    alert("Please enter valid values for all fields.");
    return;
  }

  var monthlyInterestRate = annualInterestRate / 100 / 12;
  var numberOfPayments = loanTerm * 12;
  var monthlyPayment =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  document.getElementById("monthlyPayment").innerText =
    "Monthly Payment: $" + monthlyPayment.toFixed(2);
  document.getElementById("loanResult").style.display = "block";
});

// Retirement Savings Calculator Functionality
document.getElementById('calcRetirementBtn').addEventListener('click', function() {
  var currentAge = parseFloat(document.getElementById('currentAge').value);
  var retirementAge = parseFloat(document.getElementById('retirementAge').value);
  var currentSavings = parseFloat(document.getElementById('currentSavings').value);
  var annualContribution = parseFloat(document.getElementById('annualContribution').value);
  var annualReturn = parseFloat(document.getElementById('annualReturn').value) / 100;
  
  if (isNaN(currentAge) || isNaN(retirementAge) || isNaN(currentSavings) ||
      isNaN(annualContribution) || isNaN(annualReturn) || retirementAge <= currentAge) {
    alert("Please enter valid numbers and ensure Retirement Age is greater than Current Age.");
    return;
  }
  
  var yearsToRetirement = retirementAge - currentAge;
  var futureValue = currentSavings;
  
  // Calculate compound growth annually for each year until retirement.
  for (var i = 0; i < yearsToRetirement; i++) {
    futureValue = (futureValue + annualContribution) * (1 + annualReturn);
  }
  
  document.getElementById('futureValueResult').innerText = "Estimated Savings at Retirement: $" + futureValue.toFixed(2);
  document.getElementById('retirementResult').style.display = "block";
});




// === Financial & Planning Tools ===

// Mortgage Calculator
document.getElementById("calcMortgageBtn").addEventListener("click", function () {
  let P = parseFloat(document.getElementById("mortgageAmount").value);
  let annualRate = parseFloat(document.getElementById("mortgageInterestRate").value);
  let years = parseFloat(document.getElementById("mortgageTerm").value);
  let r = annualRate / 100 / 12;
  let n = years * 12;
  let payment;
  if (r === 0) {
    payment = P / n;
  } else {
    payment = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }
  document.getElementById("monthlyMortgagePayment").innerText = "Monthly Payment: $" + payment.toFixed(2);
  document.getElementById("mortgageResult").style.display = "block";
});

// Investment Return Calculator
document.getElementById("calcInvestmentBtn").addEventListener("click", function () {
  let principal = parseFloat(document.getElementById("investmentAmount").value);
  let annualReturn = parseFloat(document.getElementById("expectedReturn").value) / 100;
  let years = parseFloat(document.getElementById("investmentPeriod").value);
  let futureValue = principal * Math.pow(1 + annualReturn, years);
  document.getElementById("futureInvestmentValue").innerText = "Future Value: $" + futureValue.toFixed(2);
  document.getElementById("investmentResult").style.display = "block";
});

// Savings Goal Calculator
document.getElementById("calcSavingsGoalBtn").addEventListener("click", function () {
  let currentSavings = parseFloat(document.getElementById("currentSavingsGoal").value);
  let goalAmount = parseFloat(document.getElementById("goalAmount").value);
  let monthlyContribution = parseFloat(document.getElementById("monthlyContributionGoal").value);
  if (monthlyContribution <= 0) {
    alert("Monthly Contribution must be greater than zero.");
    return;
  }
  let monthsNeeded = Math.ceil((goalAmount - currentSavings) / monthlyContribution);
  if (monthsNeeded < 0) monthsNeeded = 0;
  document.getElementById("monthsToGoal").innerText = "Time to reach goal: " + monthsNeeded + " month(s)";
  document.getElementById("savingsGoalResult").style.display = "block";
});

// Budget Planner
document.getElementById("calcBudgetBtn").addEventListener("click", function () {
  let income = parseFloat(document.getElementById("monthlyIncome").value);
  let expenses = parseFloat(document.getElementById("totalExpenses").value);
  let savings = income - expenses;
  document.getElementById("savingsPerMonth").innerText = "Monthly Savings: $" + savings.toFixed(2);
  document.getElementById("budgetResult").style.display = "block";
});


// === Health & Wellness Tools ===

// Calorie/BMR Calculator
document.getElementById("calcBmrBtn").addEventListener("click", function () {
  let weight = parseFloat(document.getElementById("weightBMR").value);
  let height = parseFloat(document.getElementById("heightBMR").value);
  let age = parseFloat(document.getElementById("ageBMR").value);
  let gender = document.getElementById("genderBMR").value;
  let bmr;
  if (gender === "male") {
    bmr = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
  } else {
    bmr = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
  }
  document.getElementById("bmrValue").innerText = "Your BMR is: " + bmr.toFixed(2) + " calories/day";
  document.getElementById("bmrResult").style.display = "block";
});

// Meal Planner with Nutritional Insights (Sample Implementation)
document.getElementById("planMealBtn").addEventListener("click", function () {
  let mealType = document.getElementById("mealType").value;
  let servings = document.getElementById("servings").value;
  let mealPlan;
  if (mealType === "breakfast") {
    mealPlan = "Try a bowl of oatmeal with fruits for a healthy breakfast.";
  } else if (mealType === "lunch") {
    mealPlan = "How about a quinoa salad with mixed vegetables for lunch?";
  } else {
    mealPlan = "A grilled chicken with steamed vegetables makes a great dinner.";
  }
  document.getElementById("mealPlanDetails").innerText = "For " + servings + " serving(s) of " + mealType + ": " + mealPlan;
  document.getElementById("mealPlanResult").style.display = "block";
});

// Fitness Tracker/Progress Calculator
document.getElementById("calcFitnessBtn").addEventListener("click", function () {
  let startingWeight = parseFloat(document.getElementById("startingWeight").value);
  let currentWeight = parseFloat(document.getElementById("currentWeight").value);
  let period = parseFloat(document.getElementById("trackingPeriod").value);
  let totalLoss = startingWeight - currentWeight;
  let avgLoss = period > 0 ? (totalLoss / period) : 0;
  document.getElementById("weightChange").innerText =
    "Total weight loss: " + totalLoss.toFixed(2) + " kg (" + avgLoss.toFixed(2) + " kg per month)";
  document.getElementById("fitnessResult").style.display = "block";
});


// === Utility & Conversion Tools ===

// Unit Converter
document.getElementById("convertUnitBtn").addEventListener("click", function () {
  let value = parseFloat(document.getElementById("inputValue").value);
  let fromUnit = document.getElementById("unitFrom").value;
  let toUnit = document.getElementById("unitTo").value;
  let converted;
  // Convert input value to meters as a base unit
  let valueInMeters;
  if (fromUnit === "meters") {
    valueInMeters = value;
  } else if (fromUnit === "kilometers") {
    valueInMeters = value * 1000;
  } else if (fromUnit === "miles") {
    valueInMeters = value * 1609.34;
  }
  // Convert from meters to target unit
  if (toUnit === "meters") {
    converted = valueInMeters;
  } else if (toUnit === "kilometers") {
    converted = valueInMeters / 1000;
  } else if (toUnit === "miles") {
    converted = valueInMeters / 1609.34;
  }
  document.getElementById("convertedUnit").innerText = "Converted Value: " + converted.toFixed(2) + " " + toUnit;
  document.getElementById("unitConversionResult").style.display = "block";
});

// Advanced Currency Converter (using fixed conversion rates for demo)
document.getElementById("advancedConvertBtn").addEventListener("click", function () {
  let amount = parseFloat(document.getElementById("amountAdvancedUSD").value);
  let convertTo = document.getElementById("advancedConvertTo").value;
  let rate;
  if (convertTo === "EUR") {
    rate = 0.85;
  } else if (convertTo === "GBP") {
    rate = 0.75;
  } else if (convertTo === "JPY") {
    rate = 110;
  }
  let convertedAmount = amount * rate;
  document.getElementById("advancedConvertedAmount").innerText = "Converted Amount: " + convertedAmount.toFixed(2) + " " + convertTo;
  document.getElementById("advancedConversionResult").style.display = "block";
});


// === Engagement & Interactive Content Tools ===

// Lifestyle Quiz/Survey (Placeholder)
document.getElementById("startQuizBtn").addEventListener("click", function () {
  alert("Quiz started! (This is a placeholder for the quiz interface.)");
});

// Interactive Infographic/Guide (Placeholder)
document.getElementById("viewInfographicBtn").addEventListener("click", function () {
  alert("Displaying interactive infographic... (Placeholder action.)");
});

// User Rating & Feedback
document.getElementById("submitFeedbackBtn").addEventListener("click", function () {
  let rating = document.getElementById("userRating").value;
  let feedback = document.getElementById("userFeedback").value;
  if (feedback.trim() === "") {
    alert("Please enter your feedback.");
    return;
  }
  // In a real-world scenario, you would send this data to your server
  console.log("User Rating: " + rating + " Stars");
  console.log("User Feedback: " + feedback);
  document.getElementById("feedbackResult").style.display = "block";
});


// --- Financial & Planning Tools ---

// Debt Repayment Calculator
document.getElementById("calcDebtBtn").addEventListener("click", function () {
  let totalDebt = parseFloat(document.getElementById("totalDebt").value);
  let interestRate = parseFloat(document.getElementById("interestRateDebt").value) / 100;
  let monthlyPayment = parseFloat(document.getElementById("monthlyPaymentDebt").value);
  // Simplified: Calculate payoff time in months (ignoring interest accumulation for demo)
  let months = totalDebt / monthlyPayment;
  document.getElementById("monthsToPayoff").innerText = "Estimated payoff time: " + Math.ceil(months) + " month(s)";
  document.getElementById("debtResult").style.display = "block";
});

// --- Health & Wellness Tools ---

// Water Intake Calculator
document.getElementById("calcWaterBtn").addEventListener("click", function () {
  let weight = parseFloat(document.getElementById("weightWater").value);
  // Recommendation: ~35 ml water per kg body weight
  let waterIntake = weight * 35;
  document.getElementById("dailyWaterIntake").innerText = "Recommended water intake: " + waterIntake.toFixed(0) + " ml per day";
  document.getElementById("waterResult").style.display = "block";
});

// Body Fat Percentage Calculator (using Navy Method for men as an example)
document.getElementById("calcBodyFatBtn").addEventListener("click", function () {
  let waist = parseFloat(document.getElementById("waistCircumference").value);
  let neck = parseFloat(document.getElementById("neckCircumference").value);
  let height = parseFloat(document.getElementById("heightBodyFat").value);
  let bodyFat = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
  document.getElementById("bodyFatValue").innerText = "Estimated Body Fat: " + bodyFat.toFixed(2) + "%";
  document.getElementById("bodyFatResult").style.display = "block";
});

// --- Utility & Conversion Tools ---

// Temperature Converter
document.getElementById("convertTempBtn").addEventListener("click", function(){
   let temp = parseFloat(document.getElementById("tempInput").value);
   let from = document.getElementById("tempFrom").value;
   let to = document.getElementById("tempTo").value;
   let converted;
   if(from === to){
     converted = temp;
   } else if(from === "C" && to === "F"){
     converted = (temp * 9/5) + 32;
   } else if(from === "F" && to === "C"){
     converted = (temp - 32) * 5/9;
   }
   document.getElementById("convertedTemp").innerText = "Converted Temperature: " + converted.toFixed(2) + " °" + to;
   document.getElementById("tempResult").style.display = "block";
});

// Time Zone Converter
document.getElementById("convertTimeZoneBtn").addEventListener("click", function(){
   let timeInput = document.getElementById("timeInput").value;
   if(!timeInput) {
     alert("Please enter a valid time.");
     return;
   }
   let [hours, minutes] = timeInput.split(":").map(Number);
   let fromOffset = parseFloat(document.getElementById("fromTimezone").value);
   let toOffset = parseFloat(document.getElementById("toTimezone").value);
   let totalMinutes = hours * 60 + minutes + (toOffset - fromOffset) * 60;
   totalMinutes = (totalMinutes + 1440) % 1440;
   let newHours = Math.floor(totalMinutes / 60);
   let newMinutes = totalMinutes % 60;
   let formattedTime = newHours.toString().padStart(2, "0") + ":" + newMinutes.toString().padStart(2, "0");
   document.getElementById("convertedTime").innerText = "Converted Time: " + formattedTime;
   document.getElementById("timeZoneResult").style.display = "block";
});

// --- Engagement & Interactive Content Tools ---

// Poll Creator
document.getElementById("createPollBtn").addEventListener("click", function(){
  let question = document.getElementById("pollQuestion").value;
  let option1 = document.getElementById("pollOption1").value;
  let option2 = document.getElementById("pollOption2").value;
  if(question.trim() === "" || option1.trim() === "" || option2.trim() === ""){
    alert("Please fill in the poll question and both options.");
    return;
  }
  let pollText = "Poll: " + question + "\n1. " + option1 + "\n2. " + option2;
  document.getElementById("pollDisplay").innerText = pollText;
  document.getElementById("pollResult").style.display = "block";
});

// Mood Tracker
document.getElementById("trackMoodBtn").addEventListener("click", function(){
  let mood = document.getElementById("moodInput").value;
  document.getElementById("displayMood").innerText = "Your mood today: " + mood;
  document.getElementById("moodResult").style.display = "block";
});
