import { DataTypes, Model } from "sequelize"
import sequelize from "../utils/sequelize"

interface IDoctor {
	id?: number
	ci: number
	name: string
	especialidad: string
}

class Doctor extends Model<IDoctor> {}

Doctor.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			autoIncrementIdentity: true,
		},
		ci: {
			type: DataTypes.INTEGER,
			unique: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: true,
		},
		especialidad: {
			type: DataTypes.STRING(255),
			unique: true,
		},
	},
	{
		tableName: "doctors",
		sequelize,
	}
)

export default Doctor
