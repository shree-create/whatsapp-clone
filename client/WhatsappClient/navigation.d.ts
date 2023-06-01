import { AuthParamsList } from './src/navigation/AuthNavigator';
import { AppNavigatorParams } from './src/navigation/AppNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends AppNavigatorParams,
      AuthParamsList {}
  }
}
