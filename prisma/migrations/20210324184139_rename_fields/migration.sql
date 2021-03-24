/*
  Warnings:

  - You are about to drop the column `tax_number` on the `Partner` table. All the data in the column will be lost.
  - You are about to drop the column `registration_number` on the `Partner` table. All the data in the column will be lost.
  - You are about to drop the column `account_number` on the `Partner` table. All the data in the column will be lost.
  - Added the required column `taxNumber` to the `Partner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `registrationNumber` to the `Partner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountNumber` to the `Partner` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Partner" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "companyFormId" INTEGER NOT NULL DEFAULT 1,
    "taxNumber" TEXT NOT NULL,
    "registrationNumber" TEXT NOT NULL,
    "settlementId" INTEGER NOT NULL DEFAULT 1,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    FOREIGN KEY ("companyFormId") REFERENCES "CompanyForm" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("settlementId") REFERENCES "Settlement" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Partner" ("id", "name", "companyFormId", "taxNumber", "registrationNumber", "settlementId", "address", "phone", "accountNumber", "note") SELECT "id", "name", "companyFormId", "tax_number", "registration_number", "settlementId", "address", "phone", "account_number", "note" FROM "Partner";
DROP TABLE "Partner";
ALTER TABLE "new_Partner" RENAME TO "Partner";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
