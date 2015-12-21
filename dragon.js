  var slaying = true;
  var youHit = Math.floor(Math.random() * 2);
  var damageThisRound = Math.floor(Math.random()*5 + 1);
  var totalDamage = 0;

  console.log("You are about to start Dragon Slayer!");

  while(slaying) {
      if (youHit === 1) {
          console.log("Congrats! You slayed the dragon!");
          slaying = false;
      } else if (youHit === 0) {
          console.log("Dragon defeated you!");
          slaying = false;
      } else if (totalDamage === 4) {
          console.log("Total Damage is 4! The dragon is dead!");
          slaying = false;
      } else if (totalDamage <= 4) {
          youHit = Math.floor(Math.random()*5 + 1);
          totalDamage += damageThisRound;
      }
  }
