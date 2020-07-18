import { DataBase } from "../../../infrestructure/mysqlServices/abstractMysql.service.ts";
import { Premium } from "./model.ts";
const db = DataBase.Instance.DBInstance;
db.link([Premium]);


async function getPremiumByUserId(UserId: number) {
  let data = await Premium.where({ premium_user_id: UserId }).get();
  return data;
}



export { getPremiumByUserId };
