import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const togglebutton = () => {
  const [showbutton, setshowbutton] = useState(true);

  return (
    <View style={styles.buttonView}>
      <TouchableOpacity
        style={showbutton ? styles.active : styles.notactive}
        onPress={() => setshowbutton(true)}>
        <Text>On Duty</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={showbutton ? styles.notactive : styles.active}
        onPress={() => setshowbutton(false)}>
        <Text>Off Duty</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    marginTop: 5,
    left: 7,
    height: 23,
    color: '#095D82',
    justifyContent: 'center',
  },

  active: {
    marginTop: -3,
    // Left:20,
    backgroundColor: '#2EB448',
    height: 24,
    fontWeight: 'bold',
    borderRadius: 4,
  },
  notactive: {
    backgroundColor: 'white',
    color: 'black',
    height: 18,

    borderRadius: 2,
    // borderRadius:20,
  },
});

export default togglebutton;
