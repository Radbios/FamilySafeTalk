import {
    NavigationProp,
    ParamListBase,
    RouteProp,
    useNavigation,
    useRoute,
  } from '@react-navigation/native';
import { NavigationParamList } from '../../@types/navigation';

  
  const useAppRoute = () => {
    const navigation =
      useNavigation<NavigationProp<ParamListBase | NavigationParamList>>();
    const route = useRoute<RouteProp<NavigationParamList>>();
  
    return {navigation, route};
  };
  
  export default useAppRoute;