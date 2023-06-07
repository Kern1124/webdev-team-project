/*
  Warnings:

  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserRole` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `issueNr` on the `Newspaper_copy` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN "userRole" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Role";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UserRole";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Article" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "contents" TEXT NOT NULL,
    "newspaperCopyId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Article_newspaperCopyId_fkey" FOREIGN KEY ("newspaperCopyId") REFERENCES "Newspaper_copy" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Article_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Article" ("authorId", "contents", "id", "newspaperCopyId") SELECT "authorId", "contents", "id", "newspaperCopyId" FROM "Article";
DROP TABLE "Article";
ALTER TABLE "new_Article" RENAME TO "Article";
CREATE TABLE "new_Newspaper_copy" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "newspaperId" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Newspaper_copy_newspaperId_fkey" FOREIGN KEY ("newspaperId") REFERENCES "Newspaper" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Newspaper_copy" ("date", "id", "newspaperId") SELECT "date", "id", "newspaperId" FROM "Newspaper_copy";
DROP TABLE "Newspaper_copy";
ALTER TABLE "new_Newspaper_copy" RENAME TO "Newspaper_copy";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
