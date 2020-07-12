import { App, security, logger } from "./deps.ts";
import { api } from "./src/application/routes/index.ts";
import { errorMiddleware } from "./src/infrestructure/middleware/error.middleware.ts";

const app = new App();

// Set Extra Security setting
app.use(security());

// Logging response method status path time
app.use(logger);

app.error(errorMiddleware);

app.use(api);

app.listen({ port: 5000 });
