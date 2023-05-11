// Define variables
let numPapers = 0; // How much papers you have when you start
let numLawyers = 0; // How much lawyers you have when you start
let numLawyersTier2 = 0; // Added this variable
let lawyerCost = 10; // Tier 1 cost
let lawyerTier2Cost = 2500; // The cost of tier 2
let papersPerSecond = 0; // How much you make per second
let lawyerCostMultiplier = 2; // Added this variable

// Define functions
function updatePapers(num) {
  numPapers += num;
  document.getElementById("num-papers").innerHTML = numPapers;
}

function updateLawyers(num) {
  numLawyers += num;
  document.getElementById("num-lawyers-1").innerHTML = numLawyers;
}

function updateLawyersTier2(num) { // Added this function
  numLawyersTier2 += num;
  document.getElementById("num-lawyers-2").innerHTML = numLawyersTier2;
}

function updatePPS() {
  papersPerSecond = numLawyers + numLawyersTier2 * 4;
  document.getElementById("papers-per-second-1").innerHTML = numLawyers;
  document.getElementById("papers-per-second-2").innerHTML = numLawyersTier2 * 25;
}

function buyLawyer() {
  if (numPapers >= lawyerCost) {
    updatePapers(-lawyerCost);
    updateLawyers(1);
    lawyerCost *= 2; // Increase the cost
    document.getElementById("lawyer-1-button").innerHTML = "Buy Lawyer Tier 1 - " + lawyerCost + " Papers"; // Update the button text
    updatePPS();
  }
}

function buyLawyerTier2() {
  if (numPapers >= lawyerTier2Cost) {
    updatePapers(-lawyerTier2Cost);
    updateLawyersTier2(1); // Updated to use updateLawyersTier2()
    setInterval(function() {
      updatePapers(25);
    }, Math.floor(Math.random() * 5 + 4) * 1000); // Generates a random number between 4-8 seconds and multiplies it by 1000 to convert to milliseconds
    lawyerTier2Cost *= 1; // Update the cost of Lawyer Tier 2 to be 3 times the previous cost
    document.getElementById("lawyer-2-button").innerHTML = "Buy Lawyer Tier 2 - " + lawyerTier2Cost + " Papers"; // Update the button text to display the new cost
    updatePPS();
  }
}

function generatePapersPerSecond() {
  setInterval(function() {
    updatePapers(numLawyers);
  }, 1000);
}

// Set up event listeners
document.getElementById("paper-button").addEventListener("click", function() {
  updatePapers(1);
});

document.getElementById("lawyer-1-button").addEventListener("click", buyLawyer);

document.getElementById("lawyer-2-button").addEventListener("click", buyLawyerTier2);

// Call function to generate papers for tier 1 lawyers
generatePapersPerSecond();

//AutoClicker detection

let clickCooldown = false;

function onClick() {
  if (!clickCooldown) {
    // Perform click action here
    clickCooldown = true;
    setTimeout(function() {
      clickCooldown = false;
    }, 10000); // Set cooldown time to 10 second (10000 milliseconds)
  }
}
