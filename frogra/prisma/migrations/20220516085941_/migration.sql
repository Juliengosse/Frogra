/*
  Warnings:

  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "Skill_planeId_key";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL;
