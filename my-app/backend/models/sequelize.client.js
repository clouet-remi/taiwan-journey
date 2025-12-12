import "dotenv/config";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.PG_URL, {
  freezeTableName: true,
  timestamps: true,
  underscored: true,
  // Désactive les logs SQL dans la console
  logging: false
});

 try {
        await sequelize.authenticate();
        console.log("Connection to the database has been established successfully.");
      } catch (error) {
        console.error("Unable to connect to the database:", error);
      }

await sequelize.authenticate();