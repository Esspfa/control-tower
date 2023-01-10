

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
import account from  '/TowerApp/assets/image/account.png';

const carsData = [
  {
    image: car,
    heading: 'Mandy Jones',
    subhead: 'Car Toyota RAV4 (Gray)',
    icon: marker,
    location: '789 Homby Avenue, ca, 90025',
 
  },

  
];

export default function Accepted({navigation})  
{
  function handleNavigation(screenName)
{
    navigation.navigate('Job_Details');
}

return(
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
            <TouchableOpacity
             onPress={() => handleNavigation('Job_Details')}
            style={styles.CompleteBtn}>
              <Text style={styles.CompleteButtontext}>Complete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.CancelBtn}>
              <Text style={styles.CancelButtontext}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  </ScrollView>
)};
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
    marginTop:5,
    marginLeft:17
    // marginBottom:40
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
    display: 'flex',
    alignItems: 'center',
    marginTop: 5,
    marginLeft:8
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
    borderColor:'#F24C4C',
    borderWidth:2
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

