import "dotenv/config";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.PG_URL, {
  // Une convention pour que Sequelize ne mette pas les noms de table au pluriel tout seul
  freezeTableName: true,
  // Ajoute les champs createdAt et updatedAt à chaque table
  timestamps: true,
  // Utilise le format snake_case pour les noms de colonnes
  underscored: true,
  // Désactive les logs SQL dans la console
  logging: false
});

await sequelize.authenticate();