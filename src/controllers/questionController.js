import questionService from "../services/questionService.js";
class questionController {
  createQuestion = async (req, reply) => {
    try {
      const question = await questionService.create(req.body);
      reply.code(201).send(question);
    } catch (err) {
      reply.code(500).send({ error: err.message });
    }
  };
}

export default new questionController();
