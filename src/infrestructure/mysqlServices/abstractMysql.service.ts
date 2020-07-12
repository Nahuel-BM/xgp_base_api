import { Database } from "../../../deps.ts";
import DataBaseConfig from "../../../config/database.js";

class DataBase {
  private static _instance: DataBase;
  private dbInstance: Database;

  private constructor() {
    this.dbInstance = new Database({
      "dialect": "mysql",
      "debug": false,
    }, DataBaseConfig.credentials);
  }

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  public get DBInstance() {
    return this.dbInstance;
  }
}

export { DataBase };
