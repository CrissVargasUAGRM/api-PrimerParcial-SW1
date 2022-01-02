import { DataTypes, Model } from "sequelize"
import sequelize from "../utils/sequelize"

export interface IClinic {
	id?: number
	name: string
	address: string
}

class Clinic extends Model<IClinic> {}

Clinic.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			autoIncrementIdentity: true,
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true,
		},
		address: {
			type: DataTypes.STRING(255),
		},
	},
	{
		tableName: "clinics",
		sequelize,
	}
)

export default Clinic
