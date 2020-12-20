import { ConnectionOptions } from 'typeorm';
import * as fs from 'fs';
import * as path from 'path';

const ormconfig: ConnectionOptions = {
  type: 'sqlite',

  database: 'sqlite/dogbreed.db',

  migrationsRun: true,
  migrationsTableName: 'migrations_history',

  entities: [`src/database/entities/**/*.entity{.ts,.js}`],
  migrations: [`src/database/migrations/**`],

  cli: {
    entitiesDir: `src/database/entities`,
    migrationsDir: `src/database/migrations`,
  },

  synchronize: false,
};

fs.writeFileSync(
  path.join(__dirname, '..', '..', 'ormconfig.json'),
  JSON.stringify(ormconfig, null, 2),
);
