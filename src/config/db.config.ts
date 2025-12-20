import { registerAs } from '@nestjs/config';
import * as path from 'path';

import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions.js';

export default registerAs(
  'dbconfig.',
  (): PostgresConnectionOptions => ({
    url: process.env.DATABASE_URL,
    type: 'postgres',
    synchronize: true,
    entityPrefix: 'media_',
    entities: [path.resolve(__dirname, '..') + '/**/*.entity{.ts,.js}'],
  }),
);
