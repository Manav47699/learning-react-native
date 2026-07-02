import { Text, View, StyleSheet, Pressable, Image } from "react-native";

import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";


export default function Index() {
  // const { top} = useSafeAreaInsets();
  return (
    <SafeAreaProvider> 
      <SafeAreaView style = {styles.safeview}> 
   {/* < View style = {[styles.container, {paddingTop: top}]}> */}
    {/* <Image source={}/> */}

   <Text>How are you feeling today?</Text>
   <View style= {{flexDirection: "row", justifyContent: "space-evenly"}}>
   <Pressable style ={styles.button}>
    <Image
  source={require("../assets/images/very_happy.png")}
  style={{ width: 40, height: 40 }}
/>
<Text>Very happy</Text>

    

   </Pressable>
   <Pressable style ={styles.button}>
    <Image
  source={require("../assets/images/happy.png")}
  style={{ width: 40, height: 40 }}
/>
<Text>Happy</Text>
    

   </Pressable>
   {/* <Pressable style ={styles.button}>
    <Image
  source={require("../assets/images/very_happy.png")}
  style={{ width: 40, height: 40 }}
/>
Very happy
    

   </Pressable> */}
   <Pressable style ={styles.button}>
    <Image
  source={require("../assets/images/neutral.png")}
  style={{ width: 40, height: 40 }}
/>
<Text>Neutral</Text>
    

   </Pressable>
   <Pressable style ={styles.button}>
    <Image
  source={require("../assets/images/sad.png")}
  style={{ width: 40, height: 40 }}
/>
<Text>Sad</Text>
    

   </Pressable>
   <Pressable style ={styles.button}>
    <Image
  source={require("../assets/images/stressed.png")}
  style={{ width: 40, height: 40 }}
/>
<Text>Stressed</Text>
    

   </Pressable>
   </View>

   {/* </View> */}
   </SafeAreaView>  
   </SafeAreaProvider>
    
    
    
  );
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: "whites",
    flex: 1,

  },
  safeview:{
    gap: 30
    
  },
  button:{
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    // flexWrap: "wrap",
    padding: 10
  }

})