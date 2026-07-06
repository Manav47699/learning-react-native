import { Text, View, StyleSheet, Pressable, Image, TextInput } from "react-native";
import { useState } from "react";

// import { 
//   useFonts, 
//   PlayfairDisplay_400Regular, 
//   PlayfairDisplay_700Bold 
// } from '@expo-google-fonts/playfair-display';


export default function Notes({ noteText, setNoteText }) {
  // 1. Initialize an empty string state box
// const [noteText, setNoteText] = useState("");
// const handleSave = () => {
//     if (noteText.trim() === "") {
//       alert("Please write something first!");
//       return;
//     }
    
//     // For now, let's log it to verify it works!
//     console.log("Saved note data:", noteText);
    
//     // Clear the box after saving
//     setNoteText("");
//   };
  return (
    <View>
        <Text style={{fontSize: 20, fontWeight: "bold", marginLeft: 5, margin: 5}}>Write your notes here</Text>
        <TextInput 
  style={{ borderColor: "skyblue", borderWidth: 2, margin: 20, height: 100, padding: 10, textAlignVertical: 'top' }}
  value={noteText}            // Binds input to our variable
  onChangeText={setNoteText}  // Updates variable dynamically on type
/>
        {/* <Pressable style ={styles.button} onPress={handleSave}>
            <Text> Save Notes</Text>
        </Pressable> */}
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