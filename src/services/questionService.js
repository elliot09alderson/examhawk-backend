import { QuestionModel } from "../models/QuestionModel.js";

class QuestionService {
  async create(data) {
    console.log(data);
    const { type, questionText, options, correctAnswers, marks, orGroupId } =
      data;
    const newQuestion = new QuestionModel({
      type,
      questionText,
      options,
      correctAnswers,
      marks,
      orGroupId,
    });
    return await newQuestion.save();
  }
}

export default new QuestionService();
