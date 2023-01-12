import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import acc from '/TowerApp/assets/image/acc.png';
import edit from '/TowerApp/assets/image/edit.png';
import settings from '/TowerApp/assets/image/settings.png';
import about from '/TowerApp/assets/image/about.png';
import signout from '/TowerApp/assets/image/signout.png';

const App = () => (
  <ScrollView>
    <View style={styles.container}>
      <View style={styles.first}>
        <Image style={styles.image} source={acc} />
        <Text style={styles.btxt}>John Smith</Text>
      </View>
      <View style={styles.bmain}>
        <View style={styles.imgg}>
          <Image style={styles.img} source={edit} />
          <Text style={styles.bmtxt}>Edit Profile</Text>
        </View>
        <View style={styles.imgg}>
          <Image style={styles.img} source={settings} />
          <Text style={styles.bmtxt}>Settings</Text>
        </View>
        <View style={styles.imgg}>
          <Image style={styles.img} source={about} />
          <Text style={styles.bmtxt}>About</Text>
        </View>
        <View style={styles.imgg}>
          <Image style={styles.img} source={signout} />
          <Text style={styles.bmtxt}>Sign out</Text>
        </View>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  first:
   {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',paddingTop:65
   },
  main: {
    width: '100%',
    backgroundColor: '#095D82',
  },
  imgg: {
    borderBottomWidth: 0.2,
    borderBottomColor: '#E0E9EE',
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    paddingBottom:10,
    marginTop:15,
    marginBottom:8
  },

  image: {
    width: 150,
    height:150,
  },
  img: {
    width: 70,
    marginLeft: 25,
    height:70
  },
  btxt: {
    color: '#383B40',
    fontSize: 22,
    fontWeight: '700',
  },
  bmtxt: {
    marginLeft: '3%',
    color: '#383B40',
    fontSize: 18,
    display: 'flex',
    flexDirection: 'row',
    fontWeight: '500',
    borderBottomColor: 'black',
  },

  txt: {
    color: '#fff',
    marginLeft: '35%',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default App;
