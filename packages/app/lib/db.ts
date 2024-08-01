import { PrismaClient } from '@prisma/client'

interface CustomNodeJsGlobal {
  prisma: PrismaClient
}

declare const global: CustomNodeJsGlobal

function createNewPrismaClient() {
  const prisma = new PrismaClient()
  return prisma
}

const prisma = global.prisma || createNewPrismaClient()

if (process.env.NODE_ENV === 'development') global.prisma = prisma

export default prisma
