const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: insert paragraph fields in here
const paragraphSchema = new Schema(
  {
    userID: { ref: "User", type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    body: { type: String, required: true },
    tags: {
      type: Array,
      required: true,
      unique: false,
    },
  },
  { timestamps: true }
);

const Paragraph = mongoose.model("Paragraph", paragraphSchema);
module.exports = Paragraph;
