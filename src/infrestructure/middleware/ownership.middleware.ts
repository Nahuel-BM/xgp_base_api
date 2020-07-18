import {
  Request,
  Response,
} from "../../../deps.ts";

import {
  getAllPlanetsIdByUserId,
} from "../../domain/user/planet/repository.ts";

async function validateOwnership(req: Request, res: Response) {
  let planetID = Number(req.params.planet_id);
  let userID = Number(req.params.user_id);
  if (isNaN(planetID) || isNaN(userID)) {
    throw new Error("bad_request");
  }

  let planets = await getAllPlanetsIdByUserId(userID);
  if (planets.indexOf(planetID) === -1) {
    throw new Error("forbidden");
  }
  req.params.planet_id = planetID;
  req.params.user_id = userID;
}

export { validateOwnership };
