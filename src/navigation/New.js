import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CarData from '../component/common/CarData';

import car from '/TowerApp/assets/image/car.png';
import marker from '/TowerApp/assets/image/marker.png';
import bus from '/TowerApp/assets/image/bus.png';
import mini from '/TowerApp/assets/image/mini.png';
import minicar from '/TowerApp/assets/image/minicar.png';
import truck from '/TowerApp/assets/image/truck.png';
import Custommodal from '../component/common/modal';

const carsData = [
  {
    image: car,
    heading: 'Mandy Jones',
    subhead: 'Car Toyota RAV4 (Gray)',
    icon: marker,
    location: '789 Homby Avenue, ca, 90025',
    time: '2 min ago',
  },
  {
    image: minicar,
    heading: 'Eleanor Pena',
    subhead: 'Small Truck Tata (Black)',
    icon: marker,
    location: '4 Libby Lane, Marion, oh, 43302',
    time: '20 mins ago',
  },
  {
    image: truck,
    heading: 'Theresa Webb',
    subhead: 'Wan Truck Mahindra (Gray)',
    icon: marker,
    location: '35 Hurricane, Grayson, ia, 31435',
    time: '1 hour ago',
  },
  {
    image: bus,
    heading: 'Annette BlackJones',
    subhead: 'Big Truck Eicher (Blue)',
    icon: marker,
    location: '7 Beck Street, Baton Rouge, ia, 30806',
    time: '5 hour ago',
  },
  {
    image: mini,
    heading: 'Kristin Watson',
    subhead: 'Car Nano (Yallow)',
    icon: marker,
    location: '13 Branding Iron Trail, Cody, wy, 82414',
    time: 'yesterday ago',
  },
  {
    image: car,
    heading: 'Esther Howard',
    subhead: 'Audi Q4 (Gray)',
    icon: marker,
    location: '4 Shumpert Road, Fulton, ms, 38843',
    time: 'yesterday ago',
  },
  {
    image: car,
    heading: 'Jenny Wilson',
    subhead: 'Toyota RAV4 (Gray)',
    icon: marker,
    location: '24 Fernwood Street, Henrico, va, 23228',
    time: 'yesterday ago',
  },
];

export default function New() {
  const [showmodal, setShowmodal] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          {carsData.map((item, ind) => (
            <CarData item={item}>
              <View style={styles.btndiv}>
                <TouchableOpacity
                  onPress={() => setShowmodal(true)}
                  style={styles.AcceptBtn}>
                  <Text style={styles.ButtonText}>Accept</Text>
                </TouchableOpacity>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </CarData>
          ))}
        </View>
      </View>
      {showmodal ? (
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.maincontainer}
          onPress={() => setShowmodal(false)}
        />
      ) : null}

      {showmodal ? <Custommodal setShowmodal={setShowmodal} /> : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    marginTop: 0,
    opacity: 0.9,
    backgroundColor: 'black',
    zIndex: 1,
  },
  container: {
    position: 'relative',
    overflow: 'hidden',
    height: '100%',
  },

  btndiv: {
    justifyContent: 'center',
    width: '21%',
    alignItems: 'center',
  },
  AcceptBtn: {
    backgroundColor: '#2EB448',
    margin: 2,
    width: '100%',
    height: 35,
    justifyContent: 'center',
    borderRadius: 7,
  },

  ButtonText: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
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
    height: 78,
  },
});
