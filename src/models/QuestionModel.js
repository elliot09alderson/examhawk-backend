import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["MCQ", "MSQ", "QA"],
    required: true,
  },
  answerText: { type: String },
  answerImage: { type: String },
  quesetionImages: [String],
  questionText: { type: String, required: true },
  options: [String], // only for MCQ & MSQ
  correctAnswers: [String], // e.g. ['A'], or ['A','C'] for MSQ
  answerExplanation: String, // Optional
  marks: { type: Number, required: true },
});

export const QuestionModel = mongoose.model("Question", QuestionSchema);
