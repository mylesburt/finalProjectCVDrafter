const connectDb = require("./../../config/database");
const userSeeder = require("./userSeeder");
const jobSeeder = require("./jobSeeder");
const paragraphSeeder = require("./paragraphSeeder");
// connected to DB
connectDb();

async function seed() {
  // will run all the seeder files

  await userSeeder();
  await jobSeeder();
  await paragraphSeeder();
}

seed();
