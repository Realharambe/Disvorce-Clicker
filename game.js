
let numPapers = 0; 
let numLawyers = 0; 
let numLawyersTier2 = 0; 
let lawyerCost = 10; 
let lawyerTier2Cost = 2500; 
let papersPerSecond = 0; 
let lawyerCostMultiplier = 2;


function updatePapers(num) {
  numPapers += num;
  document.getElementById("num-papers").innerHTML = numPapers;
}

function updateLawyers(num) {
  numLawyers += num;
  document.getElementById("num-lawyers-1").innerHTML = numLawyers;
}

function updateLawyersTier2(num) { 
  numLawyersTier2 += num;
  document.getElementById("num-lawyers-2").innerHTML = numLawyersTier2;
}

function updatePPS() {
  papersPerSecond = numLawyers + numLawyersTier2 * 4;
  document.getElementById("papers-per-second-1").innerHTML = numLawyers;
  document.getElementById("papers-per-second-2").innerHTML = numLawyersTier2 * 45;
}

function buyLawyer() {
  if (numPapers >= lawyerCost) {
    updatePapers(-lawyerCost);
    updateLawyers(1);
    lawyerCost *= lawyerCostMultiplier; 
    document.getElementById("lawyer-1-button").innerHTML = "Buy Lawyer Tier 1 - " + lawyerCost + " Papers";
    updatePPS();
  }
}

function buyLawyerTier2() {
  if (numPapers >= lawyerTier2Cost) {
    updatePapers(-lawyerTier2Cost);
    updateLawyersTier2(1); 
    setInterval(function() {
      updatePapers(45);
    }, Math.floor(Math.random() * 5 + 4) * 1000); 
    lawyerTier2Cost *= 2; 
    document.getElementById("lawyer-2-button").innerHTML = "Buy Lawyer Tier 2 - " + lawyerTier2Cost + " Papers"; 
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

//Random events

// Global variable to store the number of papers
let papers = 0;

// Add a click event listener to the button
document.getElementById("paper-button").addEventListener("click", function() {
  // Play a clicking sound effect
  let audio = new Audio("click_sound.mp3");
  audio.play();
  
  // Increment the papers count
  papers++;
  
  // Update the papers display
  document.getElementById("paper-count").textContent = papers;
});

// Randomly deduct papers every 10 to 20 minutes
setInterval(function() {
  // Generate a random time interval between 10 to 20 minutes
  let interval = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  
  // Generate a random number of papers to deduct between 10 to 500
  let deduction = Math.floor(Math.random() * (500 - 10 + 1)) + 10;
  
  // Deduct the papers from the total count
  papers -= deduction;
  
  // If the papers count becomes negative, set it to 0
  if (papers < 0) {
    papers = 0;
  }
  
  // Update the papers display
  document.getElementById("paper-count").textContent = papers;
  
  // Show the "You lost" message
  let message = document.createElement("p");
  message.textContent = "You lost!";
  document.body.appendChild(message);
  
  // Remove the message after 5 seconds
  setTimeout(function() {
    document.body.removeChild(message);
  }, 5000);
}, interval * 60 * 1000); // Convert the interval to milliseconds


