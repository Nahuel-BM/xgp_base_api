import { DataBase } from "../../../infrestructure/mysqlServices/abstractMysql.service.ts";
import { Research } from "./model.ts";

const db = DataBase.Instance.DBInstance;
db.link([Research]);


async function getResearch(userID: number) {
  let defenses = await Research.where({ research_user_id: userID }).get();
  return defenses;
}

export { getResearch };
