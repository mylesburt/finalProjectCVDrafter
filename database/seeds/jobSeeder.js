const faker = require("faker");
const Job = require("./../../models/Job");
const User = require("../../models/User");
const getRandomModel = require("./helper/getRandomModel");

async function seedData() {
  // delete everything inside db
  Job.collection.deleteMany();

  // for loop to generate X amount of records in my db

  console.log("creating job");
  for (let index = 0; index < 50; index++) {
    const randomUser = await getRandomModel("User");

    const job = new Job({
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraph(),
      user_id: randomUser._id,
    });

    job.save();
  }
}

module.exports = seedData;
