import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const CarData = ({item, children}) => {
  return (
    <View style={styles.inner}>
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
        {children}
      </View>
    </View>

    // ))
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    height: '100%',
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

  main: {
    width: '100%',
    height: 50,
    backgroundColor: '#095D82',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  maindetails: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '87%',
    margin: 17,
    marginLeft: 27,
    paddingBottom: 13,


  },
  inner:
  {
    height:115,
    borderBottomColor: '#E0E9EE',
    borderBottomWidth: 3,
  },

  accounticon: {
    resizeMode: 'contain',
    width: 31,
    marginLeft: 16,
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
    marginLeft: 22,
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

export default CarData;
