import { Router } from "../../../deps.ts";
import { router } from "./routes.ts";

const api = new Router();

api.use("/api", router);

export { api };
