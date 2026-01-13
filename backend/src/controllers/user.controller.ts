import { Request,Response } from "express"
import { pool } from '../db/pool'

export const createUser = async (request: Request, response: Response) =>{
    try{
        const {name,email,password,telephone} = request.body

        if(!name || !email || !password) return response.status(400).json({message:'Datos incompletos'})

        const result = await pool.query('INSERT INTO usuarios(name,email,password,telephone) VALUES($1,$2,$3,$4) RETURNING *',[name,email,password,telephone])

        response.status(201).json(result.rows[0])
    } catch (error) {
        console.error(error)
        response.status(500).json({message:"Hay un error"})
    }
}