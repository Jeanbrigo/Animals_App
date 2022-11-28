require('dotenv').config
const mongoose = require('./connection')
const Animal = require('./animal')

mongoose.connection.on('open', ()=>{

        const startAnimals = [
          { species: "Panda Bear", extinct: false, location: "China", lifeExpectancy: 20},
          { species: "Coelacanth", extinct: false, location: "Deep Sea", lifeExpectancy: 100 },
          { species: "Dodo", extinct: true, location: "Madagscar", lifeExpectancy: 30 },
          { species: "Giant Tortoise", extinct: false, location: "Galapagos", lifeExpectancy: 120 },
          { species: "Passenger Pigeon", extinct: true, location: "North America", lifeExpectancy: 15 },
        ];
      
        // Delete all animals
        Animal.deleteMany({}, (err, data) => {
          // Seed Starter Animals
          Animal.create(startAnimals, (err, createdAnimals) => {
            // send created animals as response to confirm creation
            console.log(createdAnimals);
          });
        });
      });