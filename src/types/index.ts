import routes from 'src/routes';

export type RootStackParamList = {
  [route in routes]: undefined;
};

export * from './user';
