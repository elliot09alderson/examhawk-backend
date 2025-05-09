import questionController from "../controllers/questionController.js";
export const questionRoutes = async (fastify, options) => {
  fastify.post("/question", questionController.createQuestion);
};
