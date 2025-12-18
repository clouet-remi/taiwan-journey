import "dotenv/config"; 
import { sequelize } from "../../models/sequelize.client.js";

async function syncDb() {
    try {
        await sequelize.sync({ alter: true }); 
        console.log("Database synchronized successfully!")
    } catch (error) {
        console.error("Error synchronizing the database:", error)
    }
    finally {
        await sequelize.close(); 
    }
}

syncDb(); 