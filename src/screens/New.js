import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import account from '/TowerApp/assets/image/account.png';
import car from '/TowerApp/assets/image/car.png';
import marker from '/TowerApp/assets/image/marker.png';
import bus from '/TowerApp/assets/image/bus.png';
import mini from '/TowerApp/assets/image/mini.png';
import minicar from '/TowerApp/assets/image/minicar.png';
import truck from '/TowerApp/assets/image/truck.png';
import Custommodal from '../common/modal';

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

export default function New() 
{
// function handleNavigation(screenName)
// {
//     navigation.navigate('POPUP');
// }
const [showmodal, setShowmodal] = useState(false);


return (

  <ScrollView>
    <View style={styles.container}>
      {/* <View style={styles.main}>
        <Image style={styles.accounticon} source={account} />
        <Text style={styles.title}>Control Tower</Text>
        <Text style={styles.subhead}>Control Tower</Text>
      
      </View> */}
<View>
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
            <TouchableOpacity 
            onPress={() => setShowmodal(true)}
            style={styles.AcceptBtn}>
              <Text style={styles.ButtonText}>Accept</Text>
            </TouchableOpacity>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </View>
      ))}
</View>
    </View>
    {showmodal ? <Custommodal /> : null}
  </ScrollView>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'relative',opacity:  0.5,
    backgroundColor:'black'
  },
  inner: {
    paddingBottom: 10,
    marginTop: 22,
    paddingHorizontal: 42,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#E0E9EE',
    borderBottomWidth: 2,
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

    width: '100%',
  },
  accounticon: {
    resizeMode: 'contain',
    width: 31,
    marginTop:-11,
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
    marginTop: 14,
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
    // marginLeft: 52,
    marginTop: 5,
    marginRight: 3,
  },
  btndiv: {
    // width: '100%',
    justifyContent: 'center',
    width: '21%',
    alignItems: 'center',
  },
  AcceptBtn: {
    backgroundColor: '#2EB448',
    margin: 2,
    width: '100%',
    height: 35,
    // marginTop: -173,
    // marginLeft: 290,
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
    // marginLeft: 319,
    margin: 2,
    marginTop: 13,
    // height: 18,
    borderRadius: 7,
  },
  img: {
    resizeMode: 'contain',
    width: 80,
    height: 78,
    // marginLeft: 7,
    // marginTop: -150,
    // backgroundColor:'orange'
  },
});

