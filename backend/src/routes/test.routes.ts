import Router from 'express'

const router = Router()

router.get('/test',(request,response)=>{
    response.json({
        messsage:'Hola a express y a mi'
    })
})

export default router