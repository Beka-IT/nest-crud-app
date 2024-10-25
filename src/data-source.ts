import { Global } from '@nestjs/common';
import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions : DataSourceOptions  ={
  type: 'postgres',
  host: '',  // Укажите хост
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'nestjs',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: ['dist/migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations_typeorm',
  migrationsRun: true,
};