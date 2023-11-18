import 'react-native-gesture-handler';
import { useFonts, Roboto_700Bold, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Home } from './src/pages';
import { QueryClient, QueryClientProvider } from "react-query";
import { RoutesApp } from './src/routes';


const queryClient = new QueryClient()
export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }



  return (
    <QueryClientProvider client={queryClient}>
      <RoutesApp />
    </QueryClientProvider>
  );
}

