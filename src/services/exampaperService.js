class examPaperService {
  create = async (data) => {
    const {
      title,
      instructor,
      institute,
      questions,
      totalMarks,
      useCustomMarks,
      watermarkText,
    } = data;

    const formattedQuestions = questions.map((q) => ({
      question: q.questionId,
      orGroupId: q.orGroupId || null,
    }));

    const newPaper = new ExamPaper({
      title,
      instructor,
      institute,
      questions: formattedQuestions,
      totalMarks,
      useCustomMarks,
      watermarkText,
    });

    return await newPaper.save();
  };
}
export default new examPaperService();
