-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Article" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "heading" TEXT NOT NULL,
    "contents" TEXT NOT NULL,
    "newspaperCopyId" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "approved" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Article_newspaperCopyId_fkey" FOREIGN KEY ("newspaperCopyId") REFERENCES "Newspaper_copy" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Article_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Article" ("approved", "authorId", "contents", "heading", "id", "newspaperCopyId") SELECT "approved", "authorId", "contents", "heading", "id", "newspaperCopyId" FROM "Article";
DROP TABLE "Article";
ALTER TABLE "new_Article" RENAME TO "Article";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
