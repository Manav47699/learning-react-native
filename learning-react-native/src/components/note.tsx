import { Text, View, StyleSheet, Pressable, Image, TextInput } from "react-native";

import { 
  useFonts, 
  PlayfairDisplay_400Regular, 
  PlayfairDisplay_700Bold 
} from '@expo-google-fonts/playfair-display';


export default function Notes() {
  return (
    <View>
        <Text style={{fontSize: 20, fontWeight: "bold", marginLeft: 5, margin: 5}}>Write your notes here</Text>
        <TextInput style ={{borderColor: "skyblue", borderWidth: 2, margin: 20}}></TextInput>
        <Pressable style ={styles.button}>
            <Text> Save Notes</Text>
        </Pressable>
    </View>  
  );
}

const styles = StyleSheet.create({
  
  
  button:{
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    // flexWrap: "wrap",
    padding: 10,
    margin: 40
  }

})