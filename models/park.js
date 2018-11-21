const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}

Park.prototype.addDinosaur = function(dinosaur){
  return this.dinosaurs.push(dinosaur);
}

Park.prototype.countDinos = function(){
  return this.dinosaurs.length;
}

Park.prototype.removeDinosaurByName = function (dinoName){
  const index = this.dinosaurs.indexOf(dinoName);
    this.dinosaurs.splice(index,1);
}

Park.prototype.findDinoBySpecies = function(species){
  const array = []
  for (dinosaur of this.dinosaurs){
    if (dinosaur.species == species){
      array.push(dinosaur);
    }
  }
      return array;
}

// Park.prototype.removeDinoBySpecies = function(species){
//   for (dinosaur of this.dinosaurs){
//     if (dinosaur.species == species){
//   }
// }

Park.prototype.visitorsPerDay = function(){
  let total = 0;
  for (dinosaur of this.dinosaurs){
    total += dinosaur.guestsAttractedPerDay;
  }
  return total;
}

Park.prototype.visitorsPerYear = function(){
  let total = 0;
  for (dinosaur of this.dinosaurs){
    total += dinosaur.guestsAttractedPerDay;
  }
  return total*365;
}

Park.prototype.revenuePerYear = function(){
  let total = 0;
  for (dinosaur of this.dinosaurs){
    total += dinosaur.guestsAttractedPerDay;
  }
  return total*365*this.ticketPrice;
}




module.exports = Park;
