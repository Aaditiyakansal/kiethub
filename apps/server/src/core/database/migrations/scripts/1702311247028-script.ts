import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('6f1233d8-2baf-420c-887b-18d83fce092b', '1Alycia.Schimmel@gmail.com', 'Diana', 'https://i.imgur.com/YfJQV5z.png?id=3', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('2f72a269-61d9-4432-b53d-d18b5cc45ebf', '7Aurelio.Cole19@gmail.com', 'Bob', 'https://i.imgur.com/YfJQV5z.png?id=9', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('172bed34-0d7c-4d3d-833a-a31af33dc884', '19Leonel.Kris@hotmail.com', 'Diana', 'https://i.imgur.com/YfJQV5z.png?id=21', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('65126693-c665-457d-8566-08662cb179ef', '25Orpha.Klocko26@gmail.com', 'Evan', 'https://i.imgur.com/YfJQV5z.png?id=27', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('7146b24a-c0a7-4992-98c2-6212776886d2', '31Jewell_Dickens82@gmail.com', 'Bob', 'https://i.imgur.com/YfJQV5z.png?id=33', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('1bae23bd-f040-4a3d-8c3e-7db1a0aad90a', '37Marge66@yahoo.com', 'Evan', 'https://i.imgur.com/YfJQV5z.png?id=39', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('53680611-5483-44ae-84c2-2bc24076526a', '43Hudson_Hoppe@gmail.com', 'Bob', 'https://i.imgur.com/YfJQV5z.png?id=45', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('caf4c35a-e7d3-4035-81af-a3a6170e39f8', '49Jamal_Littel@gmail.com', 'Bob', 'https://i.imgur.com/YfJQV5z.png?id=51', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "status", "password") VALUES ('30f2d14a-3ef9-461d-aec6-542078cff65e', '55Garnett_Cronin@yahoo.com', 'Alice', 'https://i.imgur.com/YfJQV5z.png?id=57', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('a8545217-f9ed-4eba-8814-18b69f8a66e6', 'Meme Posted Successfully', 'Your meme is one of todays top favorites', 'LaughLover', '64Deshawn_Goyette22@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=65', 'https://i.imgur.com/YfJQV5z.png?id=66', '6f1233d8-2baf-420c-887b-18d83fce092b');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('9116c7c1-92ad-4e7e-a95e-566572facf78', 'New Like Alert', 'Your meme is one of todays top favorites', 'ComedyCreator', '71Rosemarie76@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=72', 'https://i.imgur.com/YfJQV5z.png?id=73', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('0e9dfe69-5efe-4035-87cb-7f3b19e8ed14', 'New Like Alert', 'You have a new follower', 'JohnDoe92', '78Carolyn.Rohan77@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=79', 'https://i.imgur.com/YfJQV5z.png?id=80', '1bae23bd-f040-4a3d-8c3e-7db1a0aad90a');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('0866976a-7618-476c-a597-128e649cbc67', 'Meme Posted Successfully', 'Your meme has been posted successfully.', 'FunnyFanatic', '85Kaitlin57@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=86', 'https://i.imgur.com/YfJQV5z.png?id=87', '172bed34-0d7c-4d3d-833a-a31af33dc884');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('972506ac-b06c-4d50-97e9-c3c9cb4a94b8', 'New Like Alert', 'Your meme will expire in 24 hours.', 'ComedyCreator', '92Hulda.Sanford@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=93', 'https://i.imgur.com/YfJQV5z.png?id=94', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('ba301ab7-3091-4902-aa5f-97aa73a14805', 'Top Meme of the Day', 'Your meme just got a new like', 'ComedyCreator', '99Davon.Harris90@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=100', 'https://i.imgur.com/YfJQV5z.png?id=101', 'caf4c35a-e7d3-4035-81af-a3a6170e39f8');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('e9ce40fe-e42c-4342-8d85-ce12732997af', 'Meme Expiration Notice', 'Your meme has been posted successfully.', 'JohnDoe92', '106Karley9@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=107', 'https://i.imgur.com/YfJQV5z.png?id=108', '53680611-5483-44ae-84c2-2bc24076526a');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('5e45e6ad-614b-492b-9e0b-a8afaceb64d1', 'Meme Posted Successfully', 'Your meme is one of todays top favorites', 'FunnyFanatic', '113Lottie96@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=114', 'https://i.imgur.com/YfJQV5z.png?id=115', 'caf4c35a-e7d3-4035-81af-a3a6170e39f8');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('4dc12c3a-090d-4547-b2d6-8c8acd1b09f3', 'Meme Expiration Notice', 'Your meme will expire in 24 hours.', 'ComedyCreator', '120Lincoln.Abshire84@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=121', 'https://i.imgur.com/YfJQV5z.png?id=122', '7146b24a-c0a7-4992-98c2-6212776886d2');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('88da1335-55d8-44ab-b342-d861fcff0970', 'Meme Posted Successfully', 'Your meme just got a new like', 'MemeMaster', '127Conrad.Robel36@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=128', 'https://i.imgur.com/YfJQV5z.png?id=129', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "meme" ("id", "imageUrl", "expirationTime", "userId") VALUES ('4e94a604-19da-4f37-9f3d-df0993f5cde8', 'https://i.imgur.com/YfJQV5z.png?id=131', '2025-01-25T11:39:53.792Z', '6f1233d8-2baf-420c-887b-18d83fce092b');
INSERT INTO "meme" ("id", "imageUrl", "expirationTime", "userId") VALUES ('2ee89533-b99e-421f-9f89-34d4635636fa', 'https://i.imgur.com/YfJQV5z.png?id=134', '2023-11-24T13:14:22.784Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "meme" ("id", "imageUrl", "expirationTime", "userId") VALUES ('eb6c9511-0f2d-406a-bfef-83ed28a4e262', 'https://i.imgur.com/YfJQV5z.png?id=137', '2024-06-15T19:37:21.387Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "meme" ("id", "imageUrl", "expirationTime", "userId") VALUES ('f42c78f8-e113-4dc0-aa6c-f7026479aca2', 'https://i.imgur.com/YfJQV5z.png?id=140', '2023-06-22T15:57:59.121Z', 'caf4c35a-e7d3-4035-81af-a3a6170e39f8');
INSERT INTO "meme" ("id", "imageUrl", "expirationTime", "userId") VALUES ('c5344a81-0238-4bb6-82c8-1e9acb759376', 'https://i.imgur.com/YfJQV5z.png?id=143', '2024-11-04T05:39:00.933Z', '6f1233d8-2baf-420c-887b-18d83fce092b');
INSERT INTO "meme" ("id", "imageUrl", "expirationTime", "userId") VALUES ('4c4a6b75-248c-47c8-b698-1e054f08d97a', 'https://i.imgur.com/YfJQV5z.png?id=146', '2025-02-04T19:33:15.714Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "meme" ("id", "imageUrl", "expirationTime", "userId") VALUES ('75ab9f6b-2b58-4ba0-bd20-0dd67035f648', 'https://i.imgur.com/YfJQV5z.png?id=149', '2025-03-11T12:58:25.991Z', '1bae23bd-f040-4a3d-8c3e-7db1a0aad90a');
INSERT INTO "meme" ("id", "imageUrl", "expirationTime", "userId") VALUES ('a1ee5ccc-3723-47ec-bd04-66f07575c812', 'https://i.imgur.com/YfJQV5z.png?id=152', '2025-01-04T03:10:44.196Z', 'caf4c35a-e7d3-4035-81af-a3a6170e39f8');
INSERT INTO "meme" ("id", "imageUrl", "expirationTime", "userId") VALUES ('44dafb5d-d3fe-495a-b8d1-c3cd6104fc31', 'https://i.imgur.com/YfJQV5z.png?id=155', '2024-04-02T21:00:43.930Z', '2f72a269-61d9-4432-b53d-d18b5cc45ebf');
INSERT INTO "meme" ("id", "imageUrl", "expirationTime", "userId") VALUES ('f1df1cf2-785b-484e-9c08-105ef89dabd4', 'https://i.imgur.com/YfJQV5z.png?id=158', '2025-04-01T13:42:33.747Z', '1bae23bd-f040-4a3d-8c3e-7db1a0aad90a');

INSERT INTO "like" ("id", "userId", "memeId") VALUES ('eee8b98e-0b04-4219-9811-53cd6259f203', '6f1233d8-2baf-420c-887b-18d83fce092b', '2ee89533-b99e-421f-9f89-34d4635636fa');
INSERT INTO "like" ("id", "userId", "memeId") VALUES ('59f6b7b6-f938-4cf6-848f-ad5c78ea6c66', '172bed34-0d7c-4d3d-833a-a31af33dc884', 'c5344a81-0238-4bb6-82c8-1e9acb759376');
INSERT INTO "like" ("id", "userId", "memeId") VALUES ('7ad71d8f-ee6f-4cab-bab9-e7a48ce474ad', '7146b24a-c0a7-4992-98c2-6212776886d2', 'f1df1cf2-785b-484e-9c08-105ef89dabd4');
INSERT INTO "like" ("id", "userId", "memeId") VALUES ('89837665-c072-40ae-9737-87c4a70a72dd', '2f72a269-61d9-4432-b53d-d18b5cc45ebf', '44dafb5d-d3fe-495a-b8d1-c3cd6104fc31');
INSERT INTO "like" ("id", "userId", "memeId") VALUES ('8bb3af09-a776-491e-86c0-0c63829970d3', 'caf4c35a-e7d3-4035-81af-a3a6170e39f8', '4c4a6b75-248c-47c8-b698-1e054f08d97a');
INSERT INTO "like" ("id", "userId", "memeId") VALUES ('7ac643e8-40b9-45f5-a174-41cd6dc01696', '172bed34-0d7c-4d3d-833a-a31af33dc884', 'f1df1cf2-785b-484e-9c08-105ef89dabd4');
INSERT INTO "like" ("id", "userId", "memeId") VALUES ('6b7c8314-d16b-4a42-8440-32364980b920', '30f2d14a-3ef9-461d-aec6-542078cff65e', '44dafb5d-d3fe-495a-b8d1-c3cd6104fc31');
INSERT INTO "like" ("id", "userId", "memeId") VALUES ('f3b9b177-6489-4fd2-99b5-1c17ada4e257', '30f2d14a-3ef9-461d-aec6-542078cff65e', 'a1ee5ccc-3723-47ec-bd04-66f07575c812');
INSERT INTO "like" ("id", "userId", "memeId") VALUES ('3da94ca2-f62d-48ba-aff0-60691dde24fe', '1bae23bd-f040-4a3d-8c3e-7db1a0aad90a', '75ab9f6b-2b58-4ba0-bd20-0dd67035f648');
INSERT INTO "like" ("id", "userId", "memeId") VALUES ('d80b10d9-bdae-4ea0-96f7-4cdf4d25ba82', '2f72a269-61d9-4432-b53d-d18b5cc45ebf', '4e94a604-19da-4f37-9f3d-df0993f5cde8');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
