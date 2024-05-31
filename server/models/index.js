const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
    project : prisma.project,
    image: prisma.image
}