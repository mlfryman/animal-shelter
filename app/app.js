/* global prompt: true */

var prompt = require('sync-prompt').prompt;

var people = [], dogs = [], cats = [], bears = [];

var person1 = {name:'bob', age:10, pets:[]};
var person2 = {name:'sam', age:5, pets:[]};
var person3 = {name:'jill', age:7, pets:[]};

people.push(person1, person2, person3);

var option = prompt('(d)og, (c)at, (b)ear, or (q)uit: ');
while (option !== 'q'){

  switch(option){
    case 'd':
      var name = prompt('Name: ');
      var age = prompt('Age: ');
      var sex = prompt('Sex: ');
      var dog = {name:name, age:age, sex:sex};
      dogs.push(dog);
      break;
    case 'c': 
      var name = prompt('Name: ');
      var age = prompt('Age: ');
      var sex = prompt('Sex: ');
      var cat = {name:name, age:age, sex:sex};
      cats.push(cat);
      break;
    case 'b':
      var name = prompt('Name: ');
      var age = prompt('Age: ');
      var sex = prompt('Sex: ');
      var bear = {name:name, age:age, sex:sex};
      bears.push(bear);
  }

  option = prompt('(d)og, (c)at, (b)ear, or (q)uit: ');
}

option = prompt('(b)ob, (s)am, (j)ill, or (q)uit: ');

while(option !== 'q'){
  for(var i = 0; i < people.length; i++){
    if(people[i].name[0] === option){
      var client = people[i];
      break;
    }
  }
  
  var animals;
  console.log('Client: ',client);

  var choice = prompt('What type of pet do you want? (d)og, (c)at, or (b)ear: ');
  switch(choice){
    case 'd':
      console.log('Dogs: ', dogs);
      animals = dogs;
      break;
    case 'c':
      console.log('Cats: ', cats);
      animals = cats;
      break;
    case 'b':
      console.log('Bears: ', bears);
      animals= bears;
  }

  name = prompt('What is the name of the animal you want to adopt? ');

   for(i = 0; i < animals.length; i++){
     if(animals[i].name === name){
       var animal = animals[i];
       var index = i;
       break;
     }
    }
   console.log('Animal: ', animal);

   animals.splice(index, 1);
   client.pets.push(animal);
   console.log('After adoption: ', client);
   console.log('Animals array: ', animals);

   option = prompt('(b)ob, (s)am, (j)ill, or (q)uit: ');
}

console.log('Good luck; these animals are in your shelter: ');
console.log('Dogs: ',dogs);
console.log('Cats: ',cats);
console.log('Bears: ',bears);
