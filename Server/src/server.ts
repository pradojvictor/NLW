import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client'
import { converteHourToMinutes } from './utils/convert-hour-string-to-minutes';
import { converteMinutesTohours } from './utils/convert-minutes-to-hours-string';

const app = express()

app.use(express.json())
app.use(cors()) //limita quais dominios podem acessar; estado atual:todos

const prisma = new PrismaClient({
    log: ['query']
})


//rota dos jogos
app.get('/games', async (request, response ) => {

    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    })

    return response.json(games);
});


//rota da criação de anucios
app.post('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id;
    const body:any = request.body;


    const ad = await prisma.ad.create({
        data: {
            gameId,
            name: body.name,
            weekDays: body.weekDays.join(','),
            discord: body.discord,
            useVoiceChannel: body.useVoiceChannel,
            yearsPlaying: body.yearsPlaying,
            hourStart: converteHourToMinutes(body.hourStart),
            hourEnd: converteHourToMinutes(body.hourEnd),
        }
    })

    return response.status(201).json(ad);
});


//rota dos jogos com anucios
app.get('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id;

    const ads = await prisma.ad.findMany({
        select:{
            id:true,
            name:true,
            weekDays:true,
            useVoiceChannel:true,
            yearsPlaying:true,
            hourStart:true,
            hourEnd:true,
        },
        where: {
            gameId: gameId,
        },
        orderBy: {
            createdAt: "desc",
        }
    })

    return response.json(ads.map(ad => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(","),
            hourStart: converteMinutesTohours(ad.hourStart),
            hourEnd: converteMinutesTohours(ad.hourEnd)
        }
    }))
})


//rota dos anucios do discord
app.get('/ads/:id/discord', async (request, response) => {
    const adId = request.params.id;

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: {
            id: adId,
        }
    })

    return response.json({
        discord: ad.discord,
    })
})

app.listen(3333)


//1:01