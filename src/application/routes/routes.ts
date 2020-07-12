import { Router } from "../../../deps.ts";
import {
  getPlanetsByUserId,
  getPlanetByUserIdAndPlanetId,
} from "../controllers/planets.controller.ts";

import {
  validateToken,
  validateUser,
} from "../../infrestructure/middleware/token.middleware.ts";

const router = new Router();

router.get(
  "/:user_id/planets",
  validateToken,
  validateUser,
  getPlanetsByUserId,
);
router.get(
  "/:user_id/planets/:planet_id",
  validateToken,
  getPlanetByUserIdAndPlanetId,
);

export { router };
