/*
  Warnings:

  - You are about to drop the `Upload` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "filename" TEXT,
ADD COLUMN     "url" TEXT;

-- DropTable
DROP TABLE "Upload";
