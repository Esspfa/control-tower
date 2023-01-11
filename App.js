// In App.js in a new project

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialTop from './src/MaterialTop';
import Splash from './src/screens/Splash';
import Welcome from './src/screens/Welcome';
import POPUP from './src/screens/POPUP';
import Accepted_Job_Details from './src/screens/Accepted_Job_Details';
import Job_Details from './src/screens/Job_Details';
import account from './assets/image/account.png';
import {useNavigation} from '@react-navigation/native';
import Account from './src/screens/Account';

import {create} from 'react-test-renderer';

const Stack = createNativeStackNavigator();

function App() {
  // const navigation = useNavigation();

  const [showSplashScreen, setshowSplashScreen] = useState(true);
  const [showbutton, setshowbutton] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setshowSplashScreen(false);
    }, 4000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        {showSplashScreen ? (
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
        ) : null}

        {/*  */}

        <Stack.Screen
          name="Welcome"
          options={{headerShown: false}}
          component={Welcome}
        />
        <Stack.Screen
          name="Control Tower"
          options={({navigation}) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('My Account');
                }}>
                <Image style={{width: 32, height: 32}} source={account} />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: '#095D82',
            },
          

            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },

            headerRight: () => (
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
            ),
          })}
          component={MaterialTop}
        />

        <Stack.Screen name="POPUP" component={POPUP} />
        <Stack.Screen
          name="Job_Details"
          options={() => ({
            headerStyle: {
              backgroundColor: '#095D82',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },

            headerRight: () => (
              <View>
                <TouchableOpacity>
                  <Text>SIGN IN</Text>
                </TouchableOpacity>
              </View>
            ),
          })}
          component={Job_Details}
        />
        <Stack.Screen
          name="Accepted_Job_Details"
          component={Accepted_Job_Details}
        />

        <Stack.Screen
          name="My Account"
          options={() => ({
            headerStyle: {
              backgroundColor: '#095D82',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },

            headerRight: () => (
              <View style={styles.buttonView}>
                <TouchableOpacity
                  style={showbutton ? styles.active : styles.notactive}
                  onPress={() => setshowbutton(true)}>
                  <Text>On duty</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={showbutton ? styles.notactive : styles.active}
                  onPress={() => setshowbutton(false)}>
                  <Text>Off duty</Text>
                </TouchableOpacity>
              </View>
            ),
          })}
          component={Account}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
    height: 18,

    borderRadius: 2,
    // borderRadius:20,
  },
});
export default App;
