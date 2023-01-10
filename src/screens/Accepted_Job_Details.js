
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
import camera from '/TowerApp/assets/image/camera.png';



export default function Accepted_Job_Details()
{
return(
  <ScrollView>
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.txt}>Control Tower</Text>
      </View>
      <View style={styles.inner}>
        <View style={styles.maindiv}>
          <Image style={styles.img} source={car} />
          <Text style={styles.btxt}>Car Toyota RAV4 (Gray)</Text>
          <View style={styles.bmain}>
            <View>
              <Text style={styles.bmtxt}>En Route</Text>
            </View>

            <Text style={styles.bmtxt}>Customer</Text>
            <View style={styles.fmain}>
              <View style={styles.f1}>
                <Text style={styles.txt1}>Account</Text>
                <Text style={styles.txt2}>Elite Auto Body</Text>
                <Text style={styles.txt1}>Customer Phone</Text>
                <View style={{flexDirection: 'row'}}>
                  <Image style={styles.img1} source={phone} />
                  <Text style={styles.txt8}>(810) 220-6063</Text>
                </View>
              </View>

              <View style={styles.f3}>
                <Text style={styles.txt1}>Customer Name</Text>
                <Text style={styles.txt2}>Mandy Jones</Text>

                <Text style={styles.txt1}>Customer Location</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
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
                  {/* <View style={styles.Location}> */}
                    <Text style={styles.txt10}>
                      111 Main Road,Homby Avenue, CA
                    </Text>
                  {/* </View> */}

                  <Text style={styles.txt1}>Pickup Photos</Text>
                  <View style={styles.loc}>
                    <Image style={styles.img6} source={camera} />
                    <Image style={styles.img5} source={car5} />
                    <Image style={styles.img2} source={car2} />
                    <Image style={styles.img3} source={car3} />
                    <Image style={styles.img4} source={car4} />
                  </View>
                </View>

                <View style={styles.f2}>
                  <Text style={styles.txt0}>Location Type</Text>
                  <Text style={styles.txt00}>Parking Lot</Text>
                </View>
              </View>
            </View>
            <View style={styles.btn}>
              <TouchableOpacity style={styles.btn1}>
                <Text style={styles.text1}>Accept</Text>
              </TouchableOpacity>
 
            </View>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    marginLeft: 20,
    margin:5
  },
  main: {
    width: '100%',
    height: '5.5%',
    backgroundColor: '#095D82',
  },
  bmain: {
    marginTop: 0,
  },
  loc: {
    flexDirection: 'row',
    // resizeMode: 'contain',
    width: 30,
    margin: 15,
    marginTop: -25,
  },
  text1: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
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
    backgroundColor: '#2EB448',
    borderColor: '#2EB448',
    borderWidth: 2,
    width: '99%',
    margin: 15,
    height: 45,
    marginLeft:4,
    justifyContent: 'center',
    borderRadius: 7,
  },
 
  img2: {
    resizeMode: 'contain',
    width: 50,
    margin: 5,
  },
  img3: {
    resizeMode: 'contain',
    width: 50,
    margin: 5,
  },
  img4: {
    resizeMode: 'contain',
    width: 50,
    margin: 5,
  },
  img5: {
    resizeMode: 'contain',
    width: 50,
    margin: 5,
  },
  img6: {
    resizeMode: 'contain',
    width: 50,
    margin: 5,
  },
  maindiv: {
    marginTop: 130,
  },
  txt1: {
    marginLeft: 18,
    marginTop: 19,
    fontWeight: '500',
    fontSize: 15,
  },
  img: {
    resizeMode: 'contain',
    width: 80,
    marginLeft: 7,
    marginTop: -150,
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
    fontWeight: '500',
    fontSize: 16,
    color: 'black',
    width:'62%'
 
  },
  txt8: {
    marginLeft: 9,
    marginTop: 2,
    fontWeight: '500',
    fontSize: 15,
    color: 'black',
  },
  txt9: {
    marginLeft: 6,
    marginTop: 3,
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
  txt0: {
    marginLeft: -66,
    marginTop: 19,
    fontWeight: '500',
    fontSize: 15,
  },
  txt00: {
    marginTop: 5,
    fontWeight: '500',
    fontSize: 15,
    width:'95%',
    marginleft:50,
    flexWrap: 'wrap',
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
    marginTop: -5,
    marginLeft: 19,
  },
  fmain: {
    backgroundColor: '#E0E9EE',
    margin: -5,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
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
    marginLeft: '29%',
    color: '#383B40',
    fontSize: 20,
    lineHeight: 84,
    marginTop: -120,
    fontWeight: '700',
  },
  bmtxt: {
    marginLeft: '1%',
    marginBottom: '-5%',
    color: '#383B40',
    fontSize: 20,
    lineHeight: 84,
    fontWeight: '900',
    borderBottomColor: 'black',
  },

  txt: {
    color: '#fff',
    marginLeft: '35%',
    marginTop: -12,
    fontSize: 20,
    lineHeight: 84,
    fontWeight: '700',
  },
});

