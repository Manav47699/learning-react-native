import { Stack } from "expo-router";     // stack bhaneko chai layout bahek index page ko content pani dekha bhaneko ho haita

export default function RootLayout() {
  return <Stack screenOptions={{headerShown:false}} />;
}
