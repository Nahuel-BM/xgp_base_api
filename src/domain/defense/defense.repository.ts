import { DataBase } from "../../infrestructure/mysqlServices/abstractMysql.service.ts";
import { Defense } from "../../domain/defense/defense.model.ts";
import {
  getAllPlanetsIdByUserId,
} from "../../domain/planet/planet.repository.ts";
const db = DataBase.Instance.DBInstance;
db.link([Defense]);
await db.sync({ drop: false });

async function getDefense(PlanetID: number, userID: number) {
  let info = [
    Defense.where({ defense_planet_id: PlanetID })
      .get(),
    getAllPlanetsIdByUserId(userID),
  ];
  let [defenses, planets] = await Promise.all(info);

  if (planets.indexOf(PlanetID) === -1) {
    throw new Error("forbidden");
  }

  return defenses;
}

export { getDefense };
