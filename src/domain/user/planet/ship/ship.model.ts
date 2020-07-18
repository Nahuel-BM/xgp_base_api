import { Model, DataTypes } from "../../../../../deps.ts";

export class Ship extends Model {
  static table = "xgp_ships";

  static fields = {
    ship_id: {
      type: DataTypes.BIG_INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ship_planet_id: DataTypes.INTEGER,
    ship_small_cargo_ship: DataTypes.INTEGER,
    ship_big_cargo_ship: DataTypes.INTEGER,
    ship_light_fighter: DataTypes.INTEGER,
    ship_heavy_fighter: DataTypes.INTEGER,
    ship_cruiser: DataTypes.INTEGER,
    ship_battleship: DataTypes.INTEGER,
    ship_colony_ship: DataTypes.INTEGER,
    ship_recycler: DataTypes.INTEGER,
    ship_espionage_probe: DataTypes.INTEGER,
    ship_bomber: DataTypes.INTEGER,
    ship_solar_satellite: DataTypes.INTEGER,
    ship_destroyer: DataTypes.INTEGER,
    ship_deathstar: DataTypes.INTEGER,
    ship_battlecruiser: DataTypes.INTEGER,
  };
}
