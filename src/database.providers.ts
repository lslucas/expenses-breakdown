import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => {
      mongoose.set('useNewUrlParser', true);
      mongoose.set('useFindAndModify', false);
      mongoose.set('useCreateIndex', true);
      return mongoose.connect('mongodb://localhost:27017/mr');
    },
  },
];
