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
      company: faker.company.companyName(),
      userID: randomUser._id,
      dueDate: new Date(),
      jobLink: faker.internet.url(),
    });

    job.save();
  }
}

module.exports = seedData;
