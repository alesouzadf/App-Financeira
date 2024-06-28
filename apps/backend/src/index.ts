import express from "express";
import cors from "cors";
import RepositoryMemory from "./external/memory/RepositoryMemory";
import Create from "./core/transaction/service/Create";
import CreateController from "./adapters/CreateController";
import RepositoryPostgres from "./external/postgres/RepositotyPostgres";
import GetAll from "./core/transaction/service/GetAll";
import GetAllController from "./adapters/GetAllController";

const app = express();
const port = 4000;
app.use(express.json());
app.use(cors());

// const repository = new RepositoryMemory();
// const create = new Create(repository);
// new CreateController(app, create);

const repositoryPg = new RepositoryPostgres();

const createPg = new Create(repositoryPg);
new CreateController(app, createPg);

const getAllPg = new GetAll(repositoryPg);
new GetAllController(app, getAllPg);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
