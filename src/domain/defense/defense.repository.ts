import { DataBase } from "../../infrestructure/mysqlServices/abstractMysql.service.ts";
import { Defense } from "../../domain/defense/defense.model.ts";

const db = DataBase.Instance.DBInstance;
db.link([Defense]);
await db.sync({ drop: false });

async function getDefense(PlanetID: number, userID: number) {
  let defenses = await Defense.where({ defense_planet_id: PlanetID }).get();
  return defenses;
}

export { getDefense };
