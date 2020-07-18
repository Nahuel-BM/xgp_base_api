import { Model, DataTypes } from "../../../../deps.ts";

export class Premium extends Model {
  static table = "xgp_premium";

  static fields = {
    premium_user_id: {
      type: DataTypes.BIG_INTEGER,
      primaryKey: true,
    },
    premium_dark_matter: DataTypes.INTEGER,
    premium_officier_commander: DataTypes.INTEGER,
    premium_officier_admiral: DataTypes.INTEGER,
    premium_officier_engineer: DataTypes.INTEGER,
    premium_officier_geologist: DataTypes.INTEGER,
    premium_officier_technocrat: DataTypes.INTEGER,
  };
}
