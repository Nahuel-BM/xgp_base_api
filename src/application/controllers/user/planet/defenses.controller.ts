import { Request, Response } from "../../../../../deps.ts";
import {
  getDefense,
} from "../../../../domain/user/planet/defense/defense.repository.ts";

async function getDefensesByUserIdAndPlanetId(req: Request, res: Response) {
  let planetID = req.params.planet_id;
  let userID = req.params.user_id;
  let defenses = await getDefense(planetID, userID);
  res.status(200).send(defenses[0]);
}

export { getDefensesByUserIdAndPlanetId };
