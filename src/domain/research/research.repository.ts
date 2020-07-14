import { DataBase } from "../../infrestructure/mysqlServices/abstractMysql.service.ts";
import { Research } from "../../domain/research/research.model.ts";

const db = DataBase.Instance.DBInstance;
db.link([Research]);
await db.sync({ drop: false });

async function getResearch(userID: number) {
  let defenses = await Research.where({ research_user_id: userID }).get();
  return defenses;
}

export { getResearch };
