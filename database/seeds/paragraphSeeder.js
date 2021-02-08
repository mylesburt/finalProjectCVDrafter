const faker = require("faker");
const Paragraph = require("./../../models/Paragraph");
const User = require("../../models/User");
const getRandomModel = require("./helper/getRandomModel");

async function seedData() {
  // delete everything inside db
  Paragraph.collection.deleteMany();

  // for loop to generate X amount of records in my db

  console.log("creating paragragh");
  for (let index = 0; index < 30; index++) {
    const randomUser = await getRandomModel("User");

    const paragragh = new Paragraph({
      body: faker.lorem.paragraph(),
      userID: randomUser._id,
      name: faker.lorem.words(2),
      tags: [faker.lorem.words()],
    });

    paragragh.save();
  }
}

module.exports = seedData;
