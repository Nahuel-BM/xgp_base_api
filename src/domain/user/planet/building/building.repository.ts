import { DataBase } from "../../../../infrestructure/mysqlServices/abstractMysql.service.ts";
import { Building } from "./building.model.ts";

const db = DataBase.Instance.DBInstance;
db.link([Building]);


async function getBuilding(PlanetID: number) {
  let defenses = await Building.where({ building_planet_id: PlanetID }).get();
  return defenses;
}

export { getBuilding };
