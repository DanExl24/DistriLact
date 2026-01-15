import { Request,Response } from "express"
import { pool } from '../db/pool'


export const validateUser = async(request : Request, response: Response)=>{
    try{
        const {email,password} = request.body
        if(!email || !password) return response.status(400).json({message:'Datos incompletos'})

        const result = await pool.query('SELECT * FROM usuarios WHERE email = $1 AND password = $2',[email,password])
        
        if (result.rows.length === 0) {
            return response.status(401).json({ message: 'Credenciales inválidas' })
        }
        
        response.status(200).json(result.rows[0])
        
    } catch (error) {
        console.error(error)
        response.status(500).json({message:'Hay un error'})
    }
}