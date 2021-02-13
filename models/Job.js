const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: insert job fields in here
const jobSchema = new Schema(
  {
    userID: { ref: "User", type: Schema.Types.ObjectId, required: true },
    title: { type: String, required: true },
    company: { type: String, required: true },
    dueDate: {
      type: String,
      required: true,
      unique: false,
    },
    jobLink: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
