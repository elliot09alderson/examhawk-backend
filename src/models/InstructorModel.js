import mongoose from "mongoose";

const InstructorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    subscriptionActive: { type: Boolean, default: false },
    institute: { type: mongoose.Schema.Types.ObjectId, ref: "Institute" },
  },
  { timestamps: true }
);

export const InstructorModel = mongoose.model("Instructor", InstructorSchema);
