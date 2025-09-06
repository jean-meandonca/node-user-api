import express from 'express'
import pkg from '@prisma/client'
const { PrismaClient } = pkg

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.post('/usuarios', async (req, res) => {
    await prisma.user.create({
        data:{
            name: req.body.name,
            age : req.body.age,
            email: req.body.email
        }
    })

    res.status(201).json(req.body) 
})

app.get('/usuarios', async (req, res) => {
    let getName = []

    if(req.query){
        getName = await prisma.user.findMany({
            where: {
                name: req.query.name
            }
        })
    } else {
        getName = await prisma.user.findMany()
    }

   res.status(200).json(getName)
})

app.put('/usuarios/:id', async (req, res) => {
    await prisma.user.update({
        where:{
            id: req.params.id
        },
        data:{
            name: req.body.name,
            age : req.body.age,
            email: req.body.email
        }
    })

    res.status(201).json(req.body) 
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        },
    })

    res.status(200).json({message: "Usuário deletado com sucesso!"})
})

app.listen(3333); 
