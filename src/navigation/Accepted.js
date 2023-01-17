import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import car from '/TowerApp/assets/image/car.png';
import marker from '/TowerApp/assets/image/marker.png';
import account from '/TowerApp/assets/image/account.png';
import CarData from '../component/common/CarData';

const carsData = [
  {
    image: car,
    heading: 'Mandy Jones',
    subhead: 'Car Toyota RAV4 (Gray)',
    icon: marker,
    location: '789 Homby Avenue, ca, 90025',
  },
];

export default function Accepted({navigation}) {
  function handleNavigation(screenName) {
    navigation.navigate('Job_Details');
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {carsData.map((item, ind) => (
          <CarData item={item}>
            <View style={styles.btndiv}>
              <TouchableOpacity
                onPress={() => handleNavigation('Job_Details')}
                style={styles.CompleteBtn}>
                <Text style={styles.CompleteButtontext}>Complete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.CancelBtn}>
                <Text style={styles.CancelButtontext}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </CarData>
        ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btndiv: {
    justifyContent: 'center',
    width: '21%',
    alignItems: 'center',
  },
  CompleteBtn: {
    backgroundColor: '#2EB448',
    margin: 2,
    width: '105%',
    height: 35,
    justifyContent: 'center',
    borderRadius: 7,
  },
  CompleteButtontext: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
    fontWeight: '500',
    fontSize: 13,
  },
  CancelBtn: {
    margin: 2,
    width: '105%',
    height: 35,
    marginTop: 7,
    justifyContent: 'center',
    borderRadius: 7,
    borderColor: '#F24C4C',
    borderWidth: 2,
  },
  CancelButtontext: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#F24C4C',
    fontWeight: '700',
    fontSize: 14,
  },
  time: {
    color: '#383B40',
    fontWeight: '700',
    fontSize: 10,
    margin: 2,
    marginTop: 13,
    borderRadius: 7,
  },
  img: {
    resizeMode: 'contain',
    width: 80,
    height: 80,
  },
});
