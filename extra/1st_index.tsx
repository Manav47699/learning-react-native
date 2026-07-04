import { Button } from "expo-router/build/react-navigation";
import { Text, View, StyleSheet, Pressable, TextInput } from "react-native";
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    
    // <ScrollView  style={styles.container}>
    //     <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veritatis ullam impedit cumque facilis quibusdam doloribus nulla. Non laudantium, numquam necessitatibus dolorum quod, ipsa quis quos fugiat eos ratione enim?
          
    //     </Text>
    // </ScrollView>
//     <SafeAreaProvider>
//       <SafeAreaView style = {styles.safeareaview}>
//         <View style={styles.view}>
//         <Text>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non modi distinctio corporis voluptatem placeat nam, cum fugiat totam consequatur eum voluptate aperiam molestiae officiis sunt magnam! Iste, quae vero.
//         </Text>
//         <Text></Text>
//         <Button>
//           This is a button
//         </Button>
//         <Pressable>
//           <Text>This is a pressable</Text>
//           <TextInput

//   style={{
//     height: 40,
//     borderColor: "red",
//     borderWidth: 1,
//   }}
// />
//         </Pressable>
//         </View>
//       </SafeAreaView>
//     </SafeAreaProvider>
<SafeAreaProvider>
  <SafeAreaView>
    <View style = {styles.view}>
  <Text>this is my view</Text>
  
</View>
<View style = {styles.view}>
  <Text>this is my view</Text>
  
</View>
<View style = {styles.view}>
  <Text>this is my view</Text>
  
</View>

  </SafeAreaView>
</SafeAreaProvider>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

const styles = StyleSheet.create({
  safeareaview: {
    flex: 1,
  },
  view:{
    flex: 1,
    height: 100,
    width: 200,
    backgroundColor: "red",
    paddingLeft: 100, 
    marginLeft: 30, 
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 12, 
    justifyContent: "center", 
    marginTop: 100,
    
  }
})