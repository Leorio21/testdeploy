/*
  Warnings:

  - Added the required column `statusId` to the `Invoice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invoice" ADD COLUMN     "statusId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "InvoiceStatus"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
