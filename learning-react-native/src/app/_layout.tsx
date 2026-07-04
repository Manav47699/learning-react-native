import { Stack } from "expo-router";                 // stack bhaneko chai layout bahek index page ko content pani dekha bhaneko ho haita
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

//import garanu paro
import { 
  useFonts, 
  PlayfairDisplay_400Regular, 
  PlayfairDisplay_700Bold 
} from '@expo-google-fonts/playfair-display';

SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  // Load the fonts into memory
  const [loaded, error] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_700Bold,
  });

  //Hide the splash screen once fonts are ready
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && ! error)
  {
    return null
  }


  return <Stack screenOptions={{ headerShown: false }} />;
}