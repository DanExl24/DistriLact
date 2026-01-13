import Router from 'express'

const router = Router()

router.get('/ping',(request,response)=>{
    response.json({
        messsage:'pong desde express jaja'
    })
})

export default router