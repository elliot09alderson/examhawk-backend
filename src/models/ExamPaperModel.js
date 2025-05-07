import mongoose from "mongoose";

const ExamPaperSchema = new mongoose.Schema({
  title: { type: String, required: true },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "Instructor" },
  institute: { type: mongoose.Schema.Types.ObjectId, ref: "Institute" },
  questions: [
    {
      question: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
      orGroupId: { type: String }, // For "OR" questions, same group ID for alternatives
    },
  ],
  totalMarks: Number, // optional: auto-calculate or specify
  useCustomMarks: { type: Boolean, default: false }, // whether marks are per-question or summed
  watermarkText: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const ExamPaperModel = mongoose.model("ExamPaper", ExamPaperSchema);
