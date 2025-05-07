export const examPaperRoutes = async (fastify, options) => {
  fastify.post("/exam-papers", createExamPaper);
};
