


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
import right from '/TowerApp/assets/image/right.png';
import minicar from '/TowerApp/assets/image/minicar.png';
import truck from '/TowerApp/assets/image/truck.png';
import account from '/TowerApp/assets/image/account.png';

const carsData = [
  {
    image: car,
    heading: 'Mandy Jones',
    subhead: 'Car Toyota RAV4 (Gray)',
    icon: marker,
    location: '789 Homby Avenue, ca, 90025',
    imagerighticon: right,
    time: '2 min ago'
  },
  {
    image: minicar,
    heading: 'Eleanor Pena',
    subhead: 'Small Truck Tata (Black)',
    icon: marker,
    location: '4 Libby Lane, Marion, oh, 43302',
    imagerighticon: right,
    time: '20 mins ago'
  },
  {
    image: truck,
    heading: 'Theresa Webb',
    subhead: 'Wan Truck Mahindra (Gray)',
    icon: marker,
    location: '35 Hurricane, Grayson, ia, 31435',
    imagerighticon: right,
    time: '1 hour ago'
  },
  
  
  
   
  
];

const Completed = () => (
  <ScrollView>
    <View style={styles.container}>
    {/* <View style={styles.main}>
        <Image style={styles.accounticon} source={account} />
        <Text style={styles.title}>Control Tower</Text>
        <Text style={styles.subhead}>Control Tower</Text>
      
      </View> */}

      {carsData.map((item, ind) => (
        <View style={styles.inner} key={ind}>
          <View style={styles.maindetails}>
            <Image style={styles.img} source={item.image} />
            <View style={styles.details}>
              <Text style={styles.heading}>{item.heading}</Text>
              <Text style={styles.subhead}>{item.subhead}</Text>
              <View style={{flexDirection: 'row'}}>
                <Image style={styles.locationmarker} source={item.icon} />
                <Text style={styles.location}>{item.location}</Text>
              </View>
            </View>
          </View>

          <View style={styles.btndiv}>
              <Image style={styles.righticon} source={item.imagerighticon} />
              <Text style={styles.time}>{item.time}</Text>
          </View>
        </View>
      ))}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    paddingBottom:20,
    marginTop: 22,
    paddingHorizontal:42,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor:'#E0E9EE',
    borderBottomWidth:2,
  },
  main: {
    width: '100%',
    height: 50,
    backgroundColor: '#095D82',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  maindetails: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
  },
  accounticon: {
    resizeMode: 'contain',
    width: 31,
    marginLeft:16
   },
  details: {
    width: '60%',
    marginLeft: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 8,
    marginLeft:22
  },
  heading: {
    color: 'black',
    fontSize: 15,
    fontWeight: '900',
  },
  subhead: {
    color: '#383B40',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 7,
  },
  location: {
    color: '#383B40',
    fontSize: 11,
    fontWeight: '500',
    marginTop: 10,
  },
  locationmarker: {
    resizeMode: 'contain',
    width: 12,
    marginTop: 5,
    marginRight: 3,
  },
  btndiv: {
    justifyContent: 'center',
    width: '21%',
    alignItems: 'center',
  },
  righticon: {
    margin: 3,
    resizeMode: 'contain',
    width: '45%',
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
