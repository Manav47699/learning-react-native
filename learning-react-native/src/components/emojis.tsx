import { useState } from "react";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";

import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function Emojis() {
  const [selectedMood, setSelectedMood] = useState(null);
const moods = [
    { name: 'Very happy', img: require("../assets/images/very_happy.png") },
    { name: 'Happy', img: require("../assets/images/happy.png") },
    { name: 'Neutral', img: require("../assets/images/neutral.png") },
    { name: 'Sad', img: require("../assets/images/sad.png") },
    { name: 'Stressed', img: require("../assets/images/stressed.png") },
  ];


  return(
    <>
    <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
{/*map() function goes thorugh our list one by one and */}

      {moods.map((mood) => {
        const isSelected = selectedMood === mood.name;

        return (
          <Pressable 
            key={mood.name}
            style = {{borderWidth: 2, borderRadius: 20, padding: 10, borderColor: isSelected ? "purple" : "gray", flex: 1, alignItems: "center"}}
            // 3. Dynamically apply styles if selected
            // style={[styles.button, isSelected && styles.selectedButton]} 
            onPress={() => setSelectedMood(mood.name)} // 4. Update memory on tap
          >
            <Image source={mood.img} style={{ width: 30, height: 30, marginBottom: 5 }} />
            <Text style = {textAlign: "center"}>{mood.name}</Text>
          </Pressable>
        );
        
      })}

    </View>
    </>


  );
  // return (<View>
       
    
  //      <Text style={[styles.texts,{fontSize: 20, marginLeft: 5, margin: 5, }]}>How are you feeling today?</Text>
  //      <View style= {{flexDirection: "row", justifyContent: "space-evenly", margin: 5}}>
  //      <Pressable style ={styles.button}>
  //       <Image
  //     source={require("../assets/images/very_happy.png")}
  //     style={{ width: 40, height: 40 }}
  //   />
  //   <Text style = {
  //       styles.texts
  //   }>Very happy</Text>
    
        
    
  //      </Pressable>
  //      <Pressable style ={styles.button}>
  //       <Image
  //     source={require("../assets/images/happy.png")}
  //     style={{ width: 40, height: 40 }}
  //   />
  //   <Text>Happy</Text>
        
    
  //      </Pressable>
  //      {/* <Pressable style ={styles.button}>
  //       <Image
  //     source={require("../assets/images/very_happy.png")}
  //     style={{ width: 40, height: 40 }}
  //   />
  //   Very happy
        
    
  //      </Pressable> */}
  //      <Pressable style ={styles.button}>
  //       <Image
  //     source={require("../assets/images/neutral.png")}
  //     style={{ width: 40, height: 40 }}
  //   />
  //   <Text>Neutral</Text>
        
    
  //      </Pressable>
  //      <Pressable style ={styles.button}>
  //       <Image
  //     source={require("../assets/images/sad.png")}
  //     style={{ width: 40, height: 40 }}
  //   />
  //   <Text>Sad</Text>
        
    
  //      </Pressable>
  //      <Pressable style ={styles.button}>
  //       <Image
  //     source={require("../assets/images/stressed.png")}
  //     style={{ width: 40, height: 40 }}
  //   />
  //   <Text>Stressed</Text>
        
    
  //      </Pressable>
  //      </View>
  //      </View>
    
       
        
        
   
  // );
}

// const styles = StyleSheet.create({
//   container:{
//     backgroundColor: "whites",
//     flex: 1,

//   },
  
//   button:{
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: "gray",
//     alignItems: "center",
//     // flexWrap: "wrap",
//     padding: 10
//   }, 

//   texts : {
//     fontFamily: 'PlayfairDisplay_700Bold'
    
//   }

// })

