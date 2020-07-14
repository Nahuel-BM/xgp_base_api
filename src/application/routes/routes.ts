import { Router } from "../../../deps.ts";
import {
  getPlanetsByUserId,
  getPlanetByUserIdAndPlanetId,
} from "../controllers/planets.controller.ts";

import {
  getDefensesByUserIdAndPlanetId,
} from "../controllers/defenses.controller.ts";

import {
  getResearchByUserId,
} from "../controllers/research.controller.ts";

import {
  validateToken,
  validateUser,
} from "../../infrestructure/middleware/token.middleware.ts";

import {
  validateOwnership,
} from "../../infrestructure/middleware/ownership.middleware.ts";

const router = new Router();

router.get(
  "/:user_id/planets",
  validateToken,
  validateUser,
  getPlanetsByUserId,
);

router.get(
  "/:user_id/research",
  validateToken,
  validateUser,
  getResearchByUserId,
);

router.get(
  "/:user_id/planets/:planet_id",
  validateToken,
  validateUser,
  validateOwnership,
  getPlanetByUserIdAndPlanetId,
);

router.get(
  "/:user_id/planets/:planet_id/defenses",
  validateToken,
  validateUser,
  validateOwnership,
  getDefensesByUserIdAndPlanetId,
);

export { router };
