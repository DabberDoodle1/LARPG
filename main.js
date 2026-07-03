const actionEffect = document.getElementById("ActionEffect");
const actions = document.getElementsByClassName("action");
const enemyHPTextNode = document.getElementById("HPBar").querySelector("p");
const enemyHPNode = document.getElementById("HP");
const enemyDMGNode = document.getElementById("DMG");
const energyTextNode = document.getElementById("EnergyBar").querySelector("p");
const energyNode = document.getElementById("Energy");

let enemyHP = 10;
let selfATK = 1;
let energy = 4;
let enemyDamageTakenBonus = 0;

function updateStats() {
    enemyHPTextNode.textContent = `${enemyHP}/10`;
    enemyHPNode.style.width = `${enemyHP / 10 * 100}%`;
    enemyDMGNode.style.width = `${(10 - enemyHP) / 10 * 100}%`;
    energyTextNode.textContent = `${energy}/4`;
    energyNode.style.width = `${energy / 4 * 100}%`;
}

for (let i = 0; i < 4; ++i) {
    const functionality = [
        () => {
            enemyHP -= selfATK + enemyDamageTakenBonus;
            
            selfATK = 1;
            enemyDamageTakenBonus = 0;
        },
        () => {
            enemyHP -= selfATK + enemyDamageTakenBonus;
            
            selfATK = 1;
            enemyDamageTakenBonus = 0;
        },
        () => {
            ++selfATK;
        },
        () => {
            ++enemyDamageTakenBonus;
        }
    ];
    
    actions[i].addEventListener(`click`, e => {
        if (energy > 0) {
            functionality[i]();
            --energy;
        }
        
        updateStats();
        console.log(`Enemy HP: ${enemyHP}`);
        console.log(`Self ATK: ${selfATK}`);
        console.log(`Enemy Extra Damage Taken: ${enemyDamageTakenBonus}`);
        console.log(`Energy: ${energy}`);
    });
}