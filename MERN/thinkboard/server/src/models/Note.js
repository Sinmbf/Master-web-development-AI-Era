import mongoose from "mongoose";

// 1. Create a schema
// 2. create a model based on that schema

const notesSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }, // createdAt, updatedAt
);

const Note = mongoose.model("Note", notesSchema);
export default Note;
