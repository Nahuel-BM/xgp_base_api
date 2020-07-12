import { Request, Response } from "../../../deps.ts";
import {
  getDefense,
} from "../../domain/defense/defense.repository.ts";

async function getDefensesByUserIdAndPlanetId(req: Request, res: Response) {
  let planetID = Number(req.params.planet_id);
  let userID = Number(req.params.user_id);
  let defenses = await getDefense(planetID, userID);
  res.status(200).send(defenses);
}

export { getDefensesByUserIdAndPlanetId };
