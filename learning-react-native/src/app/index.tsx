import { Button } from "expo-router/build/react-navigation";
import { Text, View, StyleSheet, Pressable, TextInput } from "react-native";
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const { top} = useSafeAreaInsets();
  return (
   < View style = {[styles.container, {paddingTop: top}]}>
    {/* <Image source={}/> */}

   <Text>How are you feeling today?</Text>
   
   </View>
    
    
    
  );
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: "whites",
    flex: 1,

  }

})