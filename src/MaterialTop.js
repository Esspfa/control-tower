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
        tabBarOptions={{ labelStyle: { textTransform: "none"}}}
        >
          <Tab.Screen  name="New" component={New} />
          <Tab.Screen   name="Accepted" component={Accepted} />
          <Tab.Screen  name="Completed" component={Completed} />
          <Tab.Screen  name="Cancelled" component={Cancelled} />
          
        </Tab.Navigator>
    );
  }
  
  