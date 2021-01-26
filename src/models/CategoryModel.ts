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

// IntColumn get id => integer().autoIncrement()();
// TextColumn get name => text()();
// TextColumn get description => text()();
// IntColumn get qtd => integer()();
// RealColumn get price => real()();
// IntColumn get idCategory => integer().named('id_category')();
