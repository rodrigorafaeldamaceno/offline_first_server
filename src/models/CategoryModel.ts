import mongoose from "../database/database";

const CategoruSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Category", CategoruSchema);
