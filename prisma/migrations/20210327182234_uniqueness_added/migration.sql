/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[key]` on the table `Date`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Date.key_unique" ON "Date"("key");
