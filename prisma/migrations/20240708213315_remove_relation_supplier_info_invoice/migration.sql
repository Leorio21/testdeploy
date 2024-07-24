/*
  Warnings:

  - You are about to drop the column `supplierID` on the `Invoice` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `SupplierInfo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `SupplierInfo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_supplierID_fkey";

-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "supplierID";

-- AlterTable
ALTER TABLE "SupplierInfo" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "SupplierInfo_userId_key" ON "SupplierInfo"("userId");

-- AddForeignKey
ALTER TABLE "SupplierInfo" ADD CONSTRAINT "SupplierInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
