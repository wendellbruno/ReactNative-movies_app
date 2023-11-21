import { useNavigation } from '@react-navigation/native';

interface ScreenNavigationProp  {
  navigate: (screen: string, object?: {}) => void;
  goBack: () => void;
}

export const useRootesHook = () =>{
   const navigate = useNavigation<ScreenNavigationProp>()
   return navigate
}