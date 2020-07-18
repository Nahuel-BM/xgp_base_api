import { DataBase } from "../../../infrestructure/mysqlServices/abstractMysql.service.ts";
import { Setting } from "./model.ts";

const db = DataBase.Instance.DBInstance;
db.link([Setting]);

async function getSetting(userID: number) {
  let settings = await Setting.where({setting_user_id: userID }).get();
  return settings;
}

export { getSetting };
