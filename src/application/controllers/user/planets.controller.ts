import { Request, Response } from "../../../../deps.ts";
import {
  getAllPlanetsByUserId,
  getPlanet,
} from "../../../domain/user/planet/repository.ts";

async function getPlanetsByUserId(req: Request, res: Response) {
  let userID = req.params.user_id;
  let data = await getAllPlanetsByUserId(userID);
  res.status(200).send(data);
}

async function getPlanetByUserIdAndPlanetId(req: Request, res: Response) {
  let userID = Number(req.params.user_id);
  let planetID = Number(req.params.planet_id);

  if (isNaN(userID) || isNaN(planetID)) {
    throw new Error("bad_request");
  }

  let data = await getPlanet(planetID, userID);

  if (data.length === 0) {
    throw new Error("forbidden");
  } else {
    res.status(200).send(data[0]);
  }
}

export { getPlanetsByUserId, getPlanetByUserIdAndPlanetId };
