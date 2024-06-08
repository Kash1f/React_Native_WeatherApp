import { View, Text, ImageBackground, Dimensions } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (

    //background image for the app
    <View style={{ flex: 1, position: "relative" }}>
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        style={{ height: "100%", width: Dimensions.get("screen").width * 0.99999 }}
        source={require("../assets/images/bg.png")}/>
    


    <SafeAreaView style={{display:'flex', flex:1}}>

    </SafeAreaView>

    </View>

  );
}
