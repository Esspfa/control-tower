import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialTop from './src/TopBar/MaterialTop';
import Splash from './src/Startup/Splash';
import Welcome from './src/Startup/Welcome';
import Accepted_Job_Details from './src/Job_details/AcceptedJobDetails';
import Job_Details from './src/Job_details/JobDetails';
import account from './assets/image/account.png';
import Account from './src/Profie/Account';
import Togglebutton from './src/component/common/togglebutton';

const Stack = createNativeStackNavigator();

function App() {
  const [showSplashScreen, setshowSplashScreen] = useState(true);

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
            headerRight: () => <Togglebutton />,
          })}
          component={MaterialTop}
        />

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
            headerRight: () => <Togglebutton />,
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
            headerRight: () => <Togglebutton />,
          })}
          component={Account}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
