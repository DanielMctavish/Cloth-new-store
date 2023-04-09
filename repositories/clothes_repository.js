import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const clothesRepository = {
    async Create(data){
        await prisma.productor.create({
            data
        })
    },
    async GetOne(id){
        await prisma.productor.findFirst({
            where:{id}
        })
    },
    async updateOne(id){
        await prisma.productor.update({
            where:{id}
        })
    }
}