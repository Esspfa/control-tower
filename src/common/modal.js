import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const Custommodal = () => (
  <View style={styles.popupview}>
    <Text style={styles.popupheadtext}>Are You Sure !</Text>
    <Text style={styles.popupsubtext}>
      Are you sure you want to Accept this job ?
    </Text>
    <View style={styles.popupbutton}>
      <TouchableOpacity style={styles.Nobutton}>
        <Text style={styles.Nobuttontext}>No</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Yesbutton}>
        <Text style={styles.Yesbuttontext}>Yes</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  popupview: {
    backgroundColor: 'white',
    width: 310,
    
    justifyContent: 'center',
    height: 220,
    borderRadius: 30,
    position:'absolute',
    top:"23%",
    left:50
    // bottom:'50%'
  },
  popupheadtext: {
    color: 'black',
    top: 10,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  popupsubtext: {
    color: 'black',
    paddingLeft: 30,
    width: 280,
    fontSize: 20,
    top: 30,
    fontWeight: '400',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 5,
  },
  popupbutton: {
    display: 'flex',
    flexDirection: 'row',
    width: 180,
    marginTop: 55,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  Nobutton: {
    borderRadius: 6,
    borderWidth: 2,
    width: 90,
    height: 36,
    borderColor: '#F24C4C',
  },
  Nobuttontext: {
    textAlign: 'center',
    color: '#F24C4C',
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 3,
  },
  Yesbutton: {
    borderRadius: 6,
    borderWidth: 2,
    width: 90,
    height: 36,
    borderColor: '#2EB448',
    backgroundColor: '#2EB448',
    marginLeft: 20,
    alignItems: 'center',
    display: 'flex',
  },
  Yesbuttontext: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 3,
  },
});

export default Custommodal;
