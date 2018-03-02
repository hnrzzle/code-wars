function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
   }
   
   Ship.prototype.isWorthIt = function () {
     const weightOfMen = 1.5*(this.crew);
     console.log(weightOfMen);
     const draftOfLoot = this.draft - weightOfMen;
     console.log(draftOfLoot);
     if (draftOfLoot > 20) {
       console.log('Ship is BOOTYFULL')
       return true;
     }
     else {
       console.log('That\'s a lot of dudes, not a lot of loot')
       return false;
     }
   }
// https://www.codewars.com/kata/54fe05c4762e2e3047000add