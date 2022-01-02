import Doctor from "../models/doctor"
import Clinic from "../models/clinic"

Clinic.hasMany(Doctor, { as: "doctors" })
Doctor.belongsTo(Clinic, { as: "clinic" })

export { Doctor, Clinic }
