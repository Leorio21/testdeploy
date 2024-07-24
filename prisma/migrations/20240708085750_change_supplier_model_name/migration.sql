/*
  Warnings:

  - You are about to drop the `Supplier` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_supplierID_fkey";

-- DropTable
DROP TABLE "Supplier";

-- CreateTable
CREATE TABLE "SupplierInfo" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "cpl_address" TEXT,
    "postal_code" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "SupplierInfo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_supplierID_fkey" FOREIGN KEY ("supplierID") REFERENCES "SupplierInfo"("id") ON DELETE NO ACTION ON UPDATE CASCADE;
