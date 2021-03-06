import { config } from "dotenv"
import { Sequelize } from "sequelize"

config()

export default new Sequelize(process.env.DATABASE_URL as string, {
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,
		}
	},
	define: {
		paranoid: true,
		defaultScope: {
			attributes: {
				exclude: ["createdAt", "updatedAt", "deletedAt"],
			},
		},
	},
	pool: {
		idle: 10000,
		acquire: 3600000,
	},
})
