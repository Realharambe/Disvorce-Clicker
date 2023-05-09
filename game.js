// Define variables
let numPapers = 0;
let numLawyers = 0;
let numLawyersTier2 = 0; // Added this variable
let lawyerCost = 10;
let lawyerTier2Cost = 80;
let papersPerSecond = 0;

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
  document.getElementById("papers-per-second-2").innerHTML = numLawyersTier2 * 4;
}

function buyLawyer() {
  if (numPapers >= lawyerCost) {
    updatePapers(-lawyerCost);
    updateLawyers(1);
    updatePPS();
  }
}

function buyLawyerTier2() {
  if (numPapers >= lawyerTier2Cost) {
    updatePapers(-lawyerTier2Cost);
    updateLawyersTier2(1); // Updated to use updateLawyersTier2()
    setInterval(function() {
      updatePapers(4);
    }, 500);
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
