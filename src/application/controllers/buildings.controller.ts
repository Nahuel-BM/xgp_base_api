import { Request, Response } from "../../../deps.ts";
import {
  getBuilding,
} from "../../domain/building/building.repository.ts";

async function getBuildingsByUserIdAndPlanetId(req: Request, res: Response) {
  let planetID = req.params.planet_id;
  let buildings = await getBuilding(planetID);
  res.status(200).send(buildings[0]);
}

export { getBuildingsByUserIdAndPlanetId };
