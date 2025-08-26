import express from "express";
import { rootRouter } from "./routes/index.js";

const app = express();
const port = process.env.PORT ? process.env.PORT : 3333;

app.use(express.json());
app.use("/v1", rootRouter);

app.listen(port, () => {
  console.log(`Server rodando na porta: ${port}`);
});
