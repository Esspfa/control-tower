import React from 'react';
import {
   StyleSheet,
  Text,
  View,
  Image,
 } from 'react-native';
 
import acc from '/TowerApp/assets/image/acc.png';
import edit from '/TowerApp/assets/image/edit.png';
import settings from '/TowerApp/assets/image/settings.png';
import about from '/TowerApp/assets/image/about.png';
import signout from '/TowerApp/assets/image/signout.png';

const App = () => (
  
  <View style={styles.container}>
    {/* <View style={styles.main}>

    <Text style={styles.txt}>My Account</Text>
    </View> */}
    <Image style={styles.image} source={acc} />
    <Text style={styles.btxt}>John Smith</Text>
     <View style={styles.bmain}>
      <View >
        <View style={styles.img1}>
          <Image style={styles.img} source={edit}/>
          <Text style={styles.bmtxt}>Edit Profile</Text>
        </View>
        <View style={styles.img2}>
          <Image style={styles.img} source={settings}/>
          <Text style={styles.bmtxt}>Settings</Text>
        </View>
        <View style={styles.img3}>
          <Image style={styles.img} source={about}/>
          <Text style={styles.bmtxt}>About</Text>
        </View>
        <View  >
          <Image style={styles.img} source={signout}/>
          <Text style={styles.bmtxt}>Sign out</Text>
        </View>
      </View>

     </View>
 
     
      </View>
 
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
  main:
  {
    width:'100%',
    height:'9%',
    backgroundColor:'#095D82'

  },
  
  img1:
  {
    borderBottomWidth:0.2,
    borderBottomColor:'#E0E9EE',

  },
  img2:
  {
    borderBottomWidth:0.5,
    borderBottomColor:'#E0E9EE'
  },
  img3:
  {
    borderBottomWidth:1,
    borderBottomColor:'#E0E9EE'
  },

  image: {
    left: '29%',
    width: '40%',
     resizeMode: 'contain',
 
  },
  img: {
    left: '4%',
     width:'14%',
    resizeMode: 'contain',
    marginTop:-20
 
  },
  btxt: {

    marginLeft: '35%',
    color:'#383B40',
    fontSize: 20,
    lineHeight: 84,
    marginTop:-90,
    fontWeight: '700',

  },
  bmtxt: {

    marginLeft: '23%',
    marginTop:'-25%',
    color:'#383B40',
    fontSize: 17,
    lineHeight: 84,
    fontWeight: '500',
    borderBottomColor:'black',
 

  },

  
  txt: {
    color: '#fff',
    marginLeft: '35%',
    fontSize: 20,
    lineHeight: 84,
    fontWeight: '700',

  },
  
});

export default App;