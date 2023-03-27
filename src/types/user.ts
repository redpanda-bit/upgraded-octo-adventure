import type {User as GoogleUser} from '@react-native-google-signin/google-signin/src/types';

export type UserType = {
  userInfo: GoogleUser | null;
};
