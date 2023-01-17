  import * as React from 'react';
  import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
  import New from '../navigation/New';
  import Accepted from '../navigation/Accepted';
  import Completed from '../navigation/Completed';
  import Cancelled from '../navigation/Cancelled';
  
  
  const Tab = createMaterialTopTabNavigator();

  export default function MaterialTop() {
    return (
        <Tab.Navigator 
        tabBarOptions={{ labelStyle: { textTransform: "none"}}}
        >
          <Tab.Screen  name="New" component={New} />
          <Tab.Screen  name="Accepted" component={Accepted} />
          <Tab.Screen  name="Completed" component={Completed} />
          <Tab.Screen  name="Cancelled" component={Cancelled} />
          
        </Tab.Navigator>
    );
  }
  
  