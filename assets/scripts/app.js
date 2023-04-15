const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlaterHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlaterHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlaterHealth > 0) {
    alert("You won!");
  } else if (currentPlaterHealth <= 0 && currentMonsterHealth > 0) {
    alert("You lost!");
  } else if (currentPlaterHealth <= 0 && currentMonsterHealth <= 0) {
    alert("You have a draw!");
  }
}

attackBtn.addEventListener("click", attackHandler);
