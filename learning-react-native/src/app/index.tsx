import { Text, View, StyleSheet, Pressable, Image } from "react-native";

import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import Emojis from '@/components/emojis'
import Note from '@/components/note'


export default function Index() {
  // const { top} = useSafeAreaInsets();
  return (
    <>
    <SafeAreaProvider> 
          <SafeAreaView style = {styles.safeview}> 
       {/* < View style = {[styles.container, {paddingTop: top}]}> */}
        {/* <Image source={}/> */}
   <Emojis/>

   <Note />
    {/* </View> */}
       </SafeAreaView>  
       </SafeAreaProvider>
   </>
    
  );
}

const styles = StyleSheet.create({
  
  safeview:{
    
  }
  

})



