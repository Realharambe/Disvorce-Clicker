let prestigePoints = 0;
let lawyerTier1Count = 0;
let lawyerTier2Count = 0;
let money = 0;

// Function to check if the player is eligible for prestige
function canPrestige() {
  return (lawyerTier1Count >= 20 && lawyerTier2Count >= 20 && money >= 50000);
}

// Function to buy a lawyer Tier 1
function buyLawyerTier1() {
  if (money >= 1000) {
    money -= 1000;
    lawyerTier1Count++;
  }
}

// Function to buy a lawyer Tier 2
function buyLawyerTier2() {
  if (money >= 5000) {
    money -= 5000;
    lawyerTier2Count++;
  }
}

// Function to get prestige points
function getPrestigePoints() {
  if (canPrestige()) {
    prestigePoints++;
    money = 0;
    lawyerTier1Count = 0;
    lawyerTier2Count = 0;
  }
}
