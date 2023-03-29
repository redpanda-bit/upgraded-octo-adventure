import routes from 'src/routes';

export type RootStackParamList = {
  [key: keyof routes]: undefined;
};

export * from './user';
