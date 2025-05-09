import exampaperService from "../services/exampaperService.js";

class examPaperController {
  createExamPaper = async (request, reply) => {
    try {
      const paper = await exampaperService.create(request.body);
      reply.code(201).send(paper);
    } catch (err) {
      reply.code(500).send({ error: err.message });
    }
  };
}
export default new examPaperController();
