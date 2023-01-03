import { DataSource, DataSourceOptions } from 'typeorm';
import entities from './../src/typeorm';

export const dataSourceOption: DataSourceOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'myathtut',
  password: null,
  database: 'Apis',
  entities: entities,
  synchronize: false,
  migrations: ['dist/db/migrations/*.js'],
};
const dataSource = new DataSource(dataSourceOption);
export default dataSource;
