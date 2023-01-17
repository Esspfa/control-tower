import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import car from '/TowerApp/assets/image/car.png';
import marker from '/TowerApp/assets/image/marker.png';
import right from '/TowerApp/assets/image/right.png';
import minicar from '/TowerApp/assets/image/minicar.png';
import truck from '/TowerApp/assets/image/truck.png';
import CarData from '../component/common/CarData';

const carsData = [
  {
    image: car,
    heading: 'Mandy Jones',
    subhead: 'Car Toyota RAV4 (Gray)',
    icon: marker,
    location: '789 Homby Avenue, ca, 90025',
    imagerighticon: right,
    time: '2 min ago',
  },
  {
    image: minicar,
    heading: 'Eleanor Pena',
    subhead: 'Small Truck Tata (Black)',
    icon: marker,
    location: '4 Libby Lane, Marion, oh, 43302',
    imagerighticon: right,
    time: '20 mins ago',
  },
  {
    image: truck,
    heading: 'Theresa Webb',
    subhead: 'Wan Truck Mahindra (Gray)',
    icon: marker,
    location: '35 Hurricane, Grayson, ia, 31435',
    imagerighticon: right,
    time: '1 hour ago',
  },
];

const Completed = () => (
  <ScrollView>
    <View style={styles.container}>
      {carsData.map((item, ind) => (
        <CarData item={item}>
          <View style={styles.btndiv}>
            <Image style={styles.righticon} source={item.imagerighticon} />
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </CarData>
      ))}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btndiv: {
    justifyContent: 'center',
    width: '21%',
    alignItems: 'center',
  },
  righticon: {
    margin: 3,
    resizeMode: 'contain',
    width: '41%',
    height: 29,
    justifyContent: 'center',
    borderRadius: 7,
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

export default Completed;
