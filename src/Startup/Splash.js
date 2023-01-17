



import React from "react";
import { ImageBackground, StyleSheet, Text, View ,Image } from "react-native";
import bg from '/TowerApp/assets/image/bg.png'
import Rectangle from '/TowerApp/assets/image/Rectangle.png'


const Splash = () => (
  <View style={styles.container}>
    <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
      <Image  style={styles.img} source={Rectangle}/>
      <Text style={styles.text}>Control Tower</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  img: {
    width:undefined,
    height:'20%',
    justifyContent:'center',
    resizeMode: 'contain'
  },
  text: {
    color: "#095D82",
    fontSize: 36,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: "center"

  }
});

export default Splash;