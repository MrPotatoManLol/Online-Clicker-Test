// Vars \\
let Cash = 0;

let CurrentImprovement = 0;
let ImproveTotalBonus = 0;

let CashPerSecond = 0;
let DefaultCashPerSecond = 0;

let CashPerClick = 1;
let DefaultCashPerClick = 1;

// Default Cost Vars \\
const DEFAULT_UPGRADE1_COST = 10;
const DEFAULT_UPGRADE2_COST = 50;

// Cost Vars \\
let Upgrade1Cost = DEFAULT_UPGRADE1_COST;
let Upgrade2Cost = DEFAULT_UPGRADE2_COST;

// Misc Vars \\
const VERSION = "Pre-Release";
  
// HTML Elements \\
const cashAmtVar = document.getElementById("cashAmtVar");
const cashPerClickAmtVar = document.getElementById("cashPerClickAmtVar");
const currentImproveVar = document.getElementById("currentImproveVar");
const cashPerSecVar = document.getElementById("cashPerSecVar");
const giveCashButton = document.getElementById("giveCash");

// Upgrade Buttons \\
const Upgrade1Button = document.getElementById("Upgrade1Cost");
const Upgrade2Button = document.getElementById("Upgrade2Cost");
  
// Run On Start \\
console.log("Current Version: " + VERSION);
Update();
  
// Functions \\
function Update() {
    cashAmtVar.innerHTML = Cash.toString();
    currentImproveVar.innerHTML = CurrentImprovement.toString();
    cashPerClickAmtVar.innerHTML = CashPerClick.toString();
    CashPerSecondVar.innerHTML = CashPerSecond.toString();

    Upgrade1Button.innerHTML = Upgrade1Cost.toString();
    Upgrade2Button.innerHTML = Upgrade2Cost.toString();
}
  
function giveCash() {
    Cash += CashPerClick;
    Update();
}
  
function upgrade(upgradeType) {
    switch (UpgradeType) {
        case "Upgrade1":
            if (Cash <= Upgrade1Cost) {
                Cash -= Upgrade1Cost;
                Upgrade1Cost += Math.round(Upgrade1Cost * 1.15);
                CashPerClick += 1
                Update();
            }
            break;
        
        case "Upgrade2":
            if (Cash >= Upgrade2Cost) {
                Cash -= Upgrade2Cost;
                Upgrade2Cost += Math.round(Upgrade2Cost * 1.25);
                CashPerSecond += 5;
                Update()
            }
            break;
    }
}

/**
function loadGame() {
    var savedGame = JSON.parse(localStorage.getItem("gameSave"));
    if (typeof savedGame.cash !== "undefined") Cash = savedGame.cash;
}
    
  
function saveGame() {
    var gameSave = {
      cash: Cash,
      cashPerClick: CashPerClick,
      upgrades: Upgrades,
      improvements: Improvements
    }
    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}
*/
