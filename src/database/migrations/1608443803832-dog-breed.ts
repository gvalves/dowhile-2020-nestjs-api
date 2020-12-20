import { MigrationInterface, QueryRunner } from 'typeorm';

export class dogBreed1608443803832 implements MigrationInterface {
  name = 'dogBreed1608443803832';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "dog_breed" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(300) NOT NULL, "pictureUrl" varchar(500) NOT NULL)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "dog_breed"`);
  }
}
