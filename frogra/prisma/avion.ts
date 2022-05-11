import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.plane.create({
        data: {
          name: 'Concorde',
          hp: 150,
          defense: 8,
        },
      })

      await prisma.plane.create({
        data: {
          name: 'Cessna 152',
          hp: 50,
          defense: 3,
        },
      })

      await prisma.plane.create({
        data: {
          name: 'Piper PA28',
          hp: 75,
          defense: 6,
        },
      })

      await prisma.plane.create({
        data: {
          name: 'Robin DR400',
          hp: 70,
          defense: 4,
        },
      })

      await prisma.plane.create({
        data: {
          name: 'Rafale',
          hp: 500,
          defense: 15,
        },
      })

      await prisma.plane.create({
        data: {
          name: 'Boeing 737',
          hp: 180,
          defense: 8,
        },
      })

      await prisma.plane.create({
        data: {
          name: 'Airbus A380',
          hp: 180,
          defense: 10,
        },
      })

      await prisma.plane.create({
        data: {
          name: 'Mitsubichi CRJ700',
          hp: 120,
          defense: 8,
        },
      })

      await prisma.plane.create({
        data: {
          name: 'Airbus Beluga',
          hp: 200,
          defense: 8,
        },
      })

      await prisma.plane.create({
        data: {
          name: 'Canadair CL-415',
          hp: 100,
          defense: 5,
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