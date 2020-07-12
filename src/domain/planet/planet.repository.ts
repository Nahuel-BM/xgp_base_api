import { DataBase } from "../../infrestructure/mysqlServices/abstractMysql.service.ts";
import { Planet } from "../../domain/planet/planet.model.ts";
const db = DataBase.Instance.DBInstance;
db.link([Planet]);
await db.sync({ drop: false });

async function getAllPlanetsByUserId(UserId: number) {
  let data = await Planet.where({ planet_user_id: UserId }).get();
  return data;
}

async function getPlanet(PlanetId: number, UserId: number) {
  let data = await Planet.where({ planet_id: PlanetId, planet_user_id: UserId })
    .get();
  return data;
}

export { getAllPlanetsByUserId, getPlanet };
