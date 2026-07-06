// import { Text, View, StyleSheet, Pressable, Image, Button } from "react-native";

// import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
// import Emojis from '@/components/emojis'
// import Note from '@/components/note'
// import { useState } from "react";
// import ShowMood from "@/components/show_mood";


// export default function Index() {
//   // const { top} = useSafeAreaInsets();
//   const [selectedMood, setSelectedMood] = useState(null);
//   const [noteText, setNoteText] = useState("");

// const handleSave = () => {
//     if (!selectedMood) {
//       alert("Please select a mood first!");
//       return;
//     }

//     const newEntry = {
//       id: Date.now().toString(),
//       mood: selectedMood,
//       note: noteText,
//     };

//     // Adds new save entry to the top of the history list
//     setHistory([newEntry, ...history]); 

//     // Reset inputs back to blank
//     setSelectedMood(null);
//     setNoteText("");

// };
//   return (
//     <>
//     <SafeAreaProvider> 
//           <SafeAreaView style = {styles.safeview}> 
//        {/* < View style = {[styles.container, {paddingTop: top}]}> */}
//         {/* <Image source={}/> */}
//    <Emojis selectedMood={selectedMood} setSelectedMood={setSelectedMood}/>

//    <Note noteText={noteText} setNoteText={setNoteText}/>
//    <Button title="Save" onPress={handleSave} />
//     {/* </View> */}
//     <ShowMood history={history} />
//        </SafeAreaView>  
//        </SafeAreaProvider>
//    </>
    
//   );
// }

// const styles = StyleSheet.create({
  
//   safeview:{
    
//   }
  

// })



import { Text, View, StyleSheet, Pressable, Image, Button } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Emojis from '@/components/emojis';
import Note from '@/components/note';
import { useState } from "react";
import ShowMood from "@/components/show_mood";

export default function Index() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [noteText, setNoteText] = useState("");
  const [history, setHistory] = useState([]); // 👈 THIS IS WHAT WAS MISSING

  const handleSave = () => {
    if (!selectedMood) {
      alert("Please select a mood first!");
      return;
    }

    const newEntry = {
      id: Date.now().toString(),
      mood: selectedMood,
      note: noteText,
    };

    setHistory([newEntry, ...history]); 

    setSelectedMood(null);
    setNoteText("");
  }; 

  return (
    <>
      <SafeAreaProvider> 
        <SafeAreaView style={styles.safeview}> 
          <Emojis selectedMood={selectedMood} setSelectedMood={setSelectedMood}/>
          <Note noteText={noteText} setNoteText={setNoteText}/>
          <Button title="Save" onPress={handleSave} />
          <ShowMood history={history} />
        </SafeAreaView>  
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  safeview: {
    flex: 1, 
    backgroundColor: "white"
  }
});
