/*
  Warnings:

  - You are about to drop the column `settlement` on the `Partner` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Settlement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Partner" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "company_form" TEXT NOT NULL,
    "tax_number" TEXT NOT NULL,
    "registration_number" TEXT NOT NULL,
    "settlementId" INTEGER NOT NULL DEFAULT 0,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "account_number" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    FOREIGN KEY ("settlementId") REFERENCES "Settlement" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Partner" ("id", "name", "company_form", "tax_number", "registration_number", "address", "phone", "account_number", "note") SELECT "id", "name", "company_form", "tax_number", "registration_number", "address", "phone", "account_number", "note" FROM "Partner";
DROP TABLE "Partner";
ALTER TABLE "new_Partner" RENAME TO "Partner";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
