import mongoose from "mongoose";

const InstituteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: String,
    contactEmail: String,
  },
  { timestamps: true }
);

export const InstructorModel = mongoose.model("Institute", InstituteSchema);
