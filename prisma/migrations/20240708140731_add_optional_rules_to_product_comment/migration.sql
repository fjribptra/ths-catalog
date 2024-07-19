-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_commentId_fkey";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "commentId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
