import { Request, Response } from "express"

import { Clinic } from "../utils/models"
import { IClinic } from "../models/clinic"

export const getClinics = async (req: Request, res: Response) => {
	try {
		const clinics = Clinic.findAll()
		return res.status(200).json(clinics)
	} catch (err) {
		console.error(err)
		return res.status(500).json([])
	}
}

export const saveClinic = async (req: Request, res: Response) => {
	const bodyClinic = req.body as IClinic
	try {
		const [clinic, _] = await Clinic.upsert(bodyClinic)
		return res.status(202).json(clinic)
	} catch (err) {
		console.error(err)
		return res.status(500).send(null)
	}
}

export const deleteClinic = async (req: Request, res: Response) => {
	const { id } = req.params
	try {
		await Clinic.destroy({ where: { id } })
		return res.status(204).send(true)
	} catch (err) {
		console.error(err)
		return res.status(500).send(false)
	}
}

export const findClinic = async (req: Request, res: Response) => {
	const { id } = req.params
	try {
		const clinic = await Clinic.findOne({ 
			where: { id },
			include: ['doctors']
		})
		if (!clinic) {
			return res.status(404).send(null)
		}
		return res.status(204).json(clinic.toJSON())
	} catch (err) {
		console.error(err)
		return res.status(500).send(null)
	}
}
