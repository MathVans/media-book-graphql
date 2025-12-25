import { registerAs } from '@nestjs/config';
import * as path from 'path';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions.js';

// import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions.js';

export default registerAs(
  'dbconfig.',
  (): SqliteConnectionOptions => ({
    database: ':memory:',
    type: 'sqlite',
    synchronize: true,
    entityPrefix: 'media_',
    entities: [path.resolve(__dirname, '..') + '/**/*.entity{.ts,.js}'],
  }),
);
