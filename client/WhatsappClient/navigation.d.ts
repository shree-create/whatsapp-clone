import { AuthParamsList } from './src/navigation/AuthNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends AuthParamsList {}
  }
}
