-- CreateTable
CREATE TABLE "Partner" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "company_form" TEXT NOT NULL,
    "tax_number" TEXT NOT NULL,
    "registration_number" TEXT NOT NULL,
    "settlement" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "account_number" TEXT NOT NULL,
    "note" TEXT NOT NULL
);
