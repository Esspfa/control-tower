
  import * as React from 'react';
  import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
  import New from '../src/screens/New';
  import Accepted from '../src/screens/Accepted';
  import Completed from '../src/screens/Completed';
  import Cancelled from '../src/screens/Cancelled';
  
  
  const Tab = createMaterialTopTabNavigator();

  export default function MaterialTop() {
    return (
        <Tab.Navigator 
        
        screenOptions={{
          tabBarLabelStyle: { fontSize: 2},
          tabBarLabelStyle: { fontWeight:'800' },
          tabBarItemStyle: { width: 100 },
          tabBarStyle: { color: '#095D82',tintColor:'white' },
        }}

        >
          
          <Tab.Screen  name="New" component={New} />
          <Tab.Screen   name="Accepted" component={Accepted} />
          <Tab.Screen  tabBarStyle={{fontSize:12}}  name="Completed" component={Completed} />
          <Tab.Screen  name="Cancel" component={Cancelled} />
          
        </Tab.Navigator>
    );
  }
  
  