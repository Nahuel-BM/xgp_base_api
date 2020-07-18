import { Request, Response } from "../../../../deps.ts";
import {
  getSetting,
} from "../../../domain/user/settings/repository.ts";

async function getSettingsByUserId(req: Request, res: Response) {
  let userID = req.params.user_id;
  let research = await getSetting(userID);
  res.status(200).send(research[0]);
}

export { getSettingsByUserId };
