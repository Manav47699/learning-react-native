import { Button } from "expo-router/build/react-navigation";
import { Text, View, StyleSheet, Pressable, TextInput } from "react-native";
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <View style = {styles.view}>
          <Text style={{fontSize: 30, textAlign: "center", alignItems: "center", justifyContent: "center"}}>This is Heading</Text>
          <Text style={{fontSize: 10, textAlign: "center", alignItems: "center", justifyContent: "center"}}> THis is paragraph </Text>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    
    
  );
}


const styles = StyleSheet.create({
 view:{
  backgroundColor: "blue",
  // flex: 1,                #screen jati avaiable xa scrren ma sab use gar
  gap: 40,
  // justifyContent: "center",
  marginLeft: 50,
  marginRight: 50, 
  // textAlign: "center",
  // alignItems: "center",
  height: 400, 
  borderColor: "black",
  borderWidth: 40,
  borderRadius: 20,
  marginTop: 100

 }
})