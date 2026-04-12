-- AlterTable
ALTER TABLE "Medicine" ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "metaDescription" TEXT,
ADD COLUMN     "rating" DECIMAL(2,1),
ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "views" INTEGER DEFAULT 0;

-- CreateIndex
CREATE INDEX "Medicine_name_idx" ON "Medicine"("name");

-- CreateIndex
CREATE INDEX "Medicine_manufacturer_idx" ON "Medicine"("manufacturer");
