import Fastify from "fastify";
import { examPaperRoutes } from "./src/rotues/exampaperRouter.js";
import { connectDB } from "./src/utils/db.js";
import formbody from "@fastify/formbody";
import dotenv from "dotenv";
const app = Fastify({ logger: true });

dotenv.config();
app.register(formbody);
app.register(examPaperRoutes);
const start = async () => {
  await connectDB();

  try {
    await app.listen({ port: 3000 });
    console.log("Server running on http://localhost:3000");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
