import examPaperController from "../controllers/examPaperController.js";

export const examPaperRoutes = async (fastify, options) => {
  fastify.post("/exam-papers", examPaperController.createExamPaper);
};
