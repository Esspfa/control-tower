import React from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Rectangle from '/TowerApp/assets/image/Rectangle.png';
import eyeicon from '/TowerApp/assets/image/eyeicon.png';
import usericon from '/TowerApp/assets/image/usericon.png';
import lockicon from '/TowerApp/assets/image/lockicon.png';

export default function Welcome({navigation})
{
    function handleNavigation(screenName)
    {
        navigation.navigate('Control Tower');
    }


return(
  <ScrollView>
  <View style={styles.container}>
    <Image style={styles.img} source={Rectangle} />
    <Text style={styles.text}>Welcome Back!</Text>
    <Text style={styles.subtxt}>Please enter your admin details.</Text>

    <View style={styles.inputview}>
      <Image style={styles.usericon} source={usericon} />
      <TextInput
        style={styles.inputStyle}
        autoCorrect={false}
        placeholder="Username"
      />
    </View>
    <View style={styles.inputview}>
      <Image style={styles.usericon} source={lockicon} />
      <TextInput
        style={styles.inputStyle}
        autoCorrect={false}
        placeholder="Password"
      />
      <TouchableOpacity >
        <Image style={styles.eyeicon} source={eyeicon} />
      </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={() => handleNavigation('Control Tower')} style={styles.Btn}>
      <Text style={styles.otxt}>Sign In</Text>
    </TouchableOpacity>
    <View style={styles.bottomtext}>
      <Text style={{color: '#095D82', fontWeight: '600', fontSize: 17}}>
        Need help?
      </Text>
      <Text
        style={{
          color: '#383B40',
          fontWeight: '500',
          fontSize: 17,
          padding: 10,
        }}>
        Call us. (810) 220-6063
      </Text>
    </View>
  </View>
  </ScrollView>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    left: '33%',
    top: '6%',
    width: '34%',
    resizeMode: 'contain',
  },
  text: {
    color: '#383B40',
    marginLeft: '4%',
    fontSize: 36,
    lineHeight: 75,
    fontWeight: 'bold',
  },
  subtxt: {
    color: '#383B40',
    marginLeft: '5%',
    fontSize: 15,
    marginBottom: 30,
    lineHeight: 15,
    fontWeight: '450',
  },
  inputview: {
    backgroundColor: '#E0E9EE',
    width: '93%',
    height: 46,
    borderRadius: 10,
    color: 'blue',
    marginLeft: 15,
    margin: 5,
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 30,
  },
  usericon: {
    resizeMode: 'contain',
    width: 12,
    marginTop: 3,
  },
  eyeicon: {
    resizeMode: 'contain',
    width: 14,
    marginTop: 10,
    marginRight: 10,
  },
  inputStyle: {
    color: '#095D82',
    width: '93%',
    marginLeft: 11,
    fontSize: 16,
    flexDirection: 'row',
  },
  Btn: {
    borderRadius: 5,
    backgroundColor: '#095D82',
    width: '93%',
    height: '6%',
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  otxt: {
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 19,
  },
  bottomtext: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '12%',
    justifyContent: 'center',
  },
});

// export default Welcome;
