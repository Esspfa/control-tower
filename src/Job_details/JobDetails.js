import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import car from '/TowerApp/assets/image/car.png';
import phone from '/TowerApp/assets/image/phone.png';
import location from '/TowerApp/assets/image/location.png';
import car2 from '/TowerApp/assets/image/car2.png';
import car3 from '/TowerApp/assets/image/car3.png';
import car4 from '/TowerApp/assets/image/car4.png';
import car5 from '/TowerApp/assets/image/car5.png';
import addphoto from '/TowerApp/assets/image/addphoto.png';
import MapView, {Marker} from 'react-native-maps';

export default function Accepted_Job_Details() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.mainstart}>
          <Image style={styles.img} source={car} />
          <Text style={styles.btxt}>Car Toyota RAV4 (Gray)</Text>
        </View>
        <View style={styles.bmain}>
          <View>
            <Text style={styles.bmtxt}>En Route</Text>
            <MapView
              style={{minHeight: 200, margin: 2, marginRight: 10}}
              initialRegion={{
                latitude: 37.78825,
                longitude: 122.4324,
                latitudeDelta: 1.0922,
                longitudeDelta: 1.0421,
              }}
              customMapStyle>
              <Marker
                draggable
                coordinate={{
                  latitude: 37.78825,
                  longitude: 122.4324,
                }}
                onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
                title={'Test Marker'}
                description={'Marker Description'}
              />
            </MapView>
          </View>

          <Text style={styles.bmtxt}>Customer</Text>
          <View style={styles.fmain}>
            <View style={styles.f1}>
              <Text style={styles.txt1}>Account</Text>
              <Text style={styles.txt2}>Elite Auto Body</Text>
              <Text style={styles.txt1}>Customer Phone</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image style={styles.img1} source={phone} />
                <Text style={styles.txt8}>(810) 220-6063</Text>
              </View>
            </View>

            <View style={styles.f3}>
              <Text style={styles.txt1}>Customer Name</Text>
              <Text style={styles.txt2}>Mandy Jones</Text>

              <Text style={styles.txt1}>Customer Location</Text>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                }}>
                <Image style={styles.img1} source={location} />
                <Text style={styles.txt9}>789 Homby Avenue, CA, 90025</Text>
              </View>
            </View>
          </View>

          <View style={styles.Smain}>
            <Text style={styles.bmtxt}>Job Details</Text>
            <View style={styles.fmain}>
              <View style={styles.f2}>
                <Text style={styles.txt1}>Vehicle Details</Text>
                <Text style={styles.txt2}>
                  Front right tyre damage Keys are present
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.Smain}>
            <Text style={styles.bmtxt}>Service</Text>
            <View style={styles.fmain}>
              <View style={styles.f1}>
                <Text style={styles.txt1}>Symptom</Text>
                <Text style={styles.txt2}>Mechanical issue</Text>
              </View>

              <View style={styles.f2}>
                <Text style={styles.txt3}>Service</Text>
                <Text style={styles.txt4}>Tow</Text>
              </View>
            </View>
          </View>

          <View style={styles.Smain}>
            <Text style={styles.bmtxt}>Pickup Location</Text>
            <View style={styles.fmain}>
              <View style={styles.f1}>
                <Text style={styles.txt1}>Location</Text>
                <Text style={styles.txt10}>111 Main Road,Homby Avenue, CA</Text>

                  <Text style={styles.txt1}>Pickup Photos</Text>
                  <View style={styles.loc}>
                    <Image style={styles.image1} source={addphoto} />
                    <Image style={styles.image1} source={car5} />
                    <Image style={styles.image1} source={car2} />
                    <Image style={styles.image1} source={car3} />
                    <Image style={styles.image1} source={car4} />
                  </View>
                </View>

              <View style={styles.f2}>
                <Text style={styles.txt3}>Location Type</Text>
                <Text style={styles.txt4}>Parking Lot</Text>
              </View>
            </View>
          </View>
          <View style={styles.btn}>
            <TouchableOpacity style={styles.btn1}>
              <Text style={styles.text1}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2}>
              <Text style={styles.text2}>Complete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 15,
  },
  main: {
    width: '100%',
    backgroundColor: '#095D82',
  },
  mainstart: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },

  loc: {
    flexDirection: 'row',
    width: 30,
    height:43,
    margin: 15,
  },
  text1: {
    color: '#F24C4C',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
  },

  Location: {
    flex: 1,
    flexWrap: 'wrap',
  },
  text2: {
    color: 'white',
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 12,
    marginBottom: 40,
  },
  btn1: {
    borderColor: '#F24C4C',
    borderWidth: 2,
    width: '43%',
    margin: 15,
    height: 45,
    justifyContent: 'center',
    borderRadius: 5,
  },
  btn2: {
    backgroundColor: '#2EB448',
    borderColor: 'green',
    borderWidth: 2,
    width: '43%',
    height: 45,
    marginRight: '5%',
    justifyContent: 'center',
    borderRadius: 5,
  },
  image1: {
    resizeMode: 'contain',
    width: 50,
    margin: 3,
    height:45,
  },

  txt1: {
    marginLeft: 18,
    marginTop: 19,
    fontWeight: '500',
    fontSize: 15,
  },
  img: {
    resizeMode: 'contain',
    width: 85,
    height: 82,
  },
  txt2: {
    marginLeft: 18,
    marginTop: 5,
    fontWeight: '500',
    fontSize: 15,
    color: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    wordBreak: 'break-all',
  },
  txt10: {
    marginLeft: 18,
    marginTop: 5,
    width: 195,
    fontWeight: '500',
    fontSize: 14.5,
    color: 'black',
  },
  txt8: {
    marginLeft: 7,
    fontWeight: '500',
    fontSize: 14,
    color: 'black',
  },
  txt9: {
    marginLeft: 6,
    fontWeight: '500',
    fontSize: 15,
    color: 'black',
    flex: 1,
    flexWrap: 'wrap',
  },
  txt3: {
    marginRight: 100,
    marginTop: 19,
    fontWeight: '500',
    fontSize: 15,
  },
  txt4: {
    marginTop: 5,
    fontWeight: '500',
    fontSize: 15,
    flexWrap: 'wrap',
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  img1: {
    resizeMode: 'contain',
    width: 15,
    height:22,
    marginLeft: 19,
  },
  fmain: {
    backgroundColor: '#E0E9EE',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '98%',
    paddingBottom: 17,
  },
  f1: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  f3: {
    marginRight: 28,
  },

  image: {
    left: '5%',
    width: '20%',
    resizeMode: 'contain',
  },

  btxt: {
    marginLeft: '6%',
    color: '#383B40',
    fontSize: 20,
    fontWeight: '700',
  },
  bmtxt: {
    marginLeft: '1%',
    color: '#383B40',
    fontSize: 20,
    marginTop:38,
    margin:4,
    fontWeight: '900',
    borderBottomColor: 'black',
  },
});
