import { Request, Response } from "../../../deps.ts";
import {
  getAllPlanetsByUserId,
  getPlanet,
} from "../../domain/planet/planet.repository.ts";

async function getPlanetsByUserId(req: Request, res: Response) {
  let userID = req.params.user_id;
  let data = await getAllPlanetsByUserId(userID);
  res.status(200).send(data);
}

async function getPlanetByUserIdAndPlanetId(req: Request, res: Response) {
  let userID = req.params.user_id;
  let planetID = req.params.planet_id;

  let data = await getPlanet(planetID, userID);
  res.status(200).send(data);
}

export { getPlanetsByUserId, getPlanetByUserIdAndPlanetId };
