import { DataTypes } from "sequelize";
import { sequelize } from "./sequelize.client.js";

const Activity = sequelize.define("activity", {
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    img: {
        type: DataTypes.STRING(), 
        allowNull: false
    }, 
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
});

export default Activity; 