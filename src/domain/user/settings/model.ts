import { Model, DataTypes } from "../../../../deps.ts";

export class Setting extends Model {
  static table = "xgp_settings";

  static fields = {
    setting_user_id: {
      type: DataTypes.BIG_INTEGER,
      primaryKey: true,
    },
    setting_no_ip_check: DataTypes.INTEGER,
    setting_planet_sort: DataTypes.INTEGER,
    setting_planet_order: DataTypes.INTEGER,
    setting_probes_amount: DataTypes.INTEGER,
    setting_fleet_actions: DataTypes.INTEGER,
    setting_galaxy_espionage: DataTypes.INTEGER,
    setting_galaxy_write: DataTypes.INTEGER,
    setting_galaxy_buddy: DataTypes.INTEGER,
    setting_galaxy_missile: DataTypes.INTEGER,
    setting_vacations_status: DataTypes.INTEGER,
    setting_vacations_until: DataTypes.INTEGER,
    setting_delete_account: DataTypes.INTEGER,
  };
}
