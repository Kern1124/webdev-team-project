/*
  Warnings:

  - Added the required column `newspaperImg` to the `Newspaper` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Newspaper" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "publisherId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "newspaperImg" TEXT NOT NULL,
    CONSTRAINT "Newspaper_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "Publisher" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Newspaper" ("id", "name", "publisherId") SELECT "id", "name", "publisherId" FROM "Newspaper";
DROP TABLE "Newspaper";
ALTER TABLE "new_Newspaper" RENAME TO "Newspaper";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
