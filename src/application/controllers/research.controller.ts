import { Request, Response } from "../../../deps.ts";
import {
  getResearch,
} from "../../domain/research/research.repository.ts";

async function getResearchByUserId(req: Request, res: Response) {
  let planetID = req.params.planet_id;
  let userID = req.params.user_id;
  let research = await getResearch(planetID, userID);
  res.status(200).send(research[0]);
}

export { getResearchByUserId };
