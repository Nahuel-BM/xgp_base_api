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

async function getAllPlanetsIdByUserId(UserId: number) {
  let data = await Planet.select("planet_id").where({ planet_user_id: UserId })
    .get();
  data = extractIds(data);
  return data;
}

function extractIds(listOfPlanets: any) {
  let toReturn = [];

  for (let i = 0; i < listOfPlanets.length; i++) {
    toReturn.push(listOfPlanets[i].planet_id);
  }
  return toReturn;
}

export { getAllPlanetsByUserId, getPlanet, getAllPlanetsIdByUserId };
