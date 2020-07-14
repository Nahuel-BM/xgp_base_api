import { Model, DataTypes } from "../../../deps.ts";

export class Building extends Model {
  static table = "xgp_buildings";

  static fields = {
    building_id: {
      type: DataTypes.BIG_INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    building_planet_id: DataTypes.INTEGER,
    building_metal_mine: DataTypes.INTEGER,
    building_crystal_mine: DataTypes.INTEGER,
    building_deuterium_sintetizer: DataTypes.INTEGER,
    building_solar_plant: DataTypes.INTEGER,
    building_fusion_reactor: DataTypes.INTEGER,
    building_robot_factory: DataTypes.INTEGER,
    building_nano_factory: DataTypes.INTEGER,
    building_hangar: DataTypes.INTEGER,
    building_metal_store: DataTypes.INTEGER,
    building_crystal_store: DataTypes.INTEGER,
    building_deuterium_tank: DataTypes.INTEGER,
    building_laboratory: DataTypes.INTEGER,
    building_terraformer: DataTypes.INTEGER,
    building_ally_deposit: DataTypes.INTEGER,
    building_missile_silo: DataTypes.INTEGER,
    building_mondbasis: DataTypes.INTEGER,
    building_phalanx: DataTypes.INTEGER,
    building_jump_gate: DataTypes.INTEGER,
  };
}
