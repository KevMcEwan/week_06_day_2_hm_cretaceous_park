const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    park = new Park("Cretaceous Park", 25);
    dinosaur1 = new Dinosaur("Tyrannosaurus", "Carnivore", 1000);
    dinosaur2 = new Dinosaur("Triceratops", "Herbivore", 800);
    dinosaur3 = new Dinosaur("Troodon", "Omnivore", 500);
    dinosaur4 = new Dinosaur("Velociraptor", "Carnivore", 910);
    dinosaur5 = new Dinosaur("Giganotosaurus", "Carnivore", 800);
    dinosaur6 = new Dinosaur("Argentinosaurus", "Herbivore", 900);
    dinosaur7 = new Dinosaur("Velociraptor", "Carnivore", 890);
  });

  it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual(actual, "Cretaceous Park");
  });

  it('should have a ticket price', function (){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 25);
  } );

  describe('dinosaurs', function() {

  it('should have a collection of dinosaurs', function (){
    const actual = park.countDinos();
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function (){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.addDinosaur(dinosaur6);
    const actual = park.countDinos();
    assert.strictEqual(actual, 6);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.addDinosaur(dinosaur6);

    park.removeDinosaurByName("Troodon");
      const actual = park.countDinos();
      assert.strictEqual(actual, 5);
  });

  it('should be able to find the dinosaur that attracts the most visitors',function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);

    const array = []
    for (dinosaur of park.dinosaurs){
      array.push(dinosaur.guestsAttractedPerDay);
    }
    const actual = array;
    assert.deepStrictEqual(actual, [1000,800]);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.addDinosaur(dinosaur6);
    park.addDinosaur(dinosaur7);

    const actual = park.findDinoBySpecies("Velociraptor");
    assert.deepStrictEqual(actual, [dinosaur4, dinosaur7]);
  });

  xit('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.addDinosaur(dinosaur6);
    park.addDinosaur(dinosaur7);
    park.removeDinoBySpecies("Velociraptor");
    const actual = park.countDinos();
    assert.strictEqual(actual, 5);
  });

  it('should calculate total visitors per day', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.addDinosaur(dinosaur6);
    park.addDinosaur(dinosaur7);

    const actual = park.visitorsPerDay();
    assert.strictEqual(actual, 5800 );
  });

  it('should calculate total visitors per year', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.addDinosaur(dinosaur6);
    park.addDinosaur(dinosaur7);

    const actual = park.visitorsPerYear();
    assert.strictEqual(actual, 2117000 );
  });

  it('should calculate total revenue per year', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    park.addDinosaur(dinosaur6);
    park.addDinosaur(dinosaur7);

    const actual = park.revenuePerYear();
    assert.strictEqual(actual, 52925000 );
  });

  });
});
