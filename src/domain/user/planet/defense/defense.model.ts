import { Model, DataTypes } from "../../../../../deps.ts";

export class Defense extends Model {
  static table = "xgp_defenses";

  static fields = {
    defense_id: {
      type: DataTypes.BIG_INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    defense_planet_id: DataTypes.INTEGER,
    defense_rocket_launcher: DataTypes.INTEGER,
    defense_light_laser: DataTypes.INTEGER,
    defense_heavy_laser: DataTypes.INTEGER,
    defense_ion_cannon: DataTypes.INTEGER,
    defense_gauss_cannon: DataTypes.INTEGER,
    defense_plasma_turret: DataTypes.INTEGER,
    defense_small_shield_dome: DataTypes.INTEGER,
    defense_large_shield_dome: DataTypes.INTEGER,
    "defense_anti-ballistic_missile": DataTypes.INTEGER,
    defense_interplanetary_missile: DataTypes.INTEGER,
  };
}
