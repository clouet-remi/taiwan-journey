import { sequelize } from "../../models/sequelize.client.js";
import { Activity } from "../../models/index.js";

import fs from "node:fs";

async function seed() {
    try {
        const data = JSON.parse(fs.readFileSync(new URL("./activities.dataset.json", import.meta.url), "utf-8"));

        console.log("Syncing database...")
        await sequelize.sync({ force: true }); // Rappel perso: force: true va DROP toutes les tables donc à ne pas utiliser en prod !

        console.log("Seeding activities...");
        const activities = await Activity.bulkCreate(data.activities, { returning: true });

        console.log("Seeding complete!");
        await sequelize.close(); 

    } catch (error) {
        console.error("Seed script error:", error)
    }
}; 

seed(); 