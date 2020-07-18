import { Model, DataTypes } from "../../../../deps.ts";

export class Research extends Model {
  static table = "xgp_research";

  static fields = {
    research_id: {
      type: DataTypes.BIG_INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    research_user_id: DataTypes.INTEGER,
    research_current_research: DataTypes.INTEGER,
    research_espionage_technology: DataTypes.INTEGER,
    research_computer_technology: DataTypes.INTEGER,
    research_weapons_technology: DataTypes.INTEGER,
    research_shielding_technology: DataTypes.INTEGER,
    research_armour_technology: DataTypes.INTEGER,
    research_energy_technology: DataTypes.INTEGER,
    research_hyperspace_technology: DataTypes.INTEGER,
    research_combustion_drive: DataTypes.INTEGER,
    research_impulse_drive: DataTypes.INTEGER,
    research_hyperspace_drive: DataTypes.INTEGER,
    research_laser_technology: DataTypes.INTEGER,
    research_ionic_technology: DataTypes.INTEGER,
    research_plasma_technology: DataTypes.INTEGER,
    research_intergalactic_research_network: DataTypes.INTEGER,
    research_astrophysics: DataTypes.INTEGER,
    research_graviton_technology: DataTypes.INTEGER,
  };
}
