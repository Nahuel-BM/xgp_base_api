import { DataBase } from "../../infrestructure/mysqlServices/abstractMysql.service.ts";
import { Ship } from "./ship.model.ts";

const db = DataBase.Instance.DBInstance;
db.link([Ship]);
await db.sync({ drop: false });

async function getship(PlanetID: number) {
  let ships = await Ship.where({ ship_planet_id: PlanetID }).get();
  return ships;
}

export { getship };
