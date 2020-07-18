import { Request, Response } from "../../../../../deps.ts";
import {
  getship,
} from "../../../../domain/user/planet/ship/ship.repository.ts";

async function getShipsByPlanetId(req: Request, res: Response) {
  let planetID = req.params.planet_id;
  let ships = await getship(planetID);
  res.status(200).send(ships[0]);
}

export { getShipsByPlanetId };
