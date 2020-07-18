import { Request, Response } from "../../../../deps.ts";
import {
  getResearch,
} from "../../../domain/user/research/repository.ts";

async function getResearchByUserId(req: Request, res: Response) {
  let userID = req.params.user_id;
  let research = await getResearch(userID);
  res.status(200).send(research[0]);
}

export { getResearchByUserId };
