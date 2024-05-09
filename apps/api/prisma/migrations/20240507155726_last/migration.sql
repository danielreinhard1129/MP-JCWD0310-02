/*
  Warnings:

  - You are about to drop the column `userId` on the `event` table. All the data in the column will be lost.
  - You are about to drop the column `expiredAt` on the `user_reward` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `event` DROP FOREIGN KEY `event_userId_fkey`;

-- AlterTable
ALTER TABLE `event` DROP COLUMN `userId`;

-- AlterTable
ALTER TABLE `user` MODIFY `isDeleted` BOOLEAN NULL DEFAULT false,
    MODIFY `isVerified` BOOLEAN NULL DEFAULT false,
    MODIFY `pictureId` VARCHAR(191) NULL,
    MODIFY `points` INTEGER NOT NULL DEFAULT 0,
    MODIFY `pointsExpired` DATETIME(3) NULL,
    MODIFY `role` VARCHAR(191) NOT NULL DEFAULT 'client',
    MODIFY `updateAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `user_reward` DROP COLUMN `expiredAt`;

-- CreateTable
CREATE TABLE `_EventToUser` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_EventToUser_AB_unique`(`A`, `B`),
    INDEX `_EventToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_EventToUser` ADD CONSTRAINT `_EventToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `event`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_EventToUser` ADD CONSTRAINT `_EventToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
