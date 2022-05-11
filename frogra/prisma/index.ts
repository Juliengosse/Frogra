import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
      data: {
        name: 'Test',
        email: 'test@test.test',
        password: 'test',
      },
    })

    await prisma.plane.create({
        data: {
          name: 'Test',
          email: 'test@test.test',
          password: 'test',
        },
      })
  }

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })