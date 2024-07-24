/*
  Warnings:

  - You are about to drop the column `date` on the `Invoice` table. All the data in the column will be lost.
  - Added the required column `payment_termId` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "date",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "payment_termId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "PaymentTerm" (
    "id" TEXT NOT NULL,
    "delay" INTEGER NOT NULL,

    CONSTRAINT "PaymentTerm_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_payment_termId_fkey" FOREIGN KEY ("payment_termId") REFERENCES "PaymentTerm"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
