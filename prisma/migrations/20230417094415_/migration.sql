/*
  Warnings:

  - A unique constraint covering the columns `[githubAccessToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[githubRefreshToken]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN "githubAccessToken" TEXT;
ALTER TABLE "User" ADD COLUMN "githubRefreshToken" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_githubAccessToken_key" ON "User"("githubAccessToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_githubRefreshToken_key" ON "User"("githubRefreshToken");
