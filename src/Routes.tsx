import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, HelpScreen, Transitions, Services, Statement, }  from './screens/';

const Tab = createBottomTabNavigator();

const Routes: React.FunctionComponent = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="inicio" component={Home} />
      <Tab.Screen name="extrato" component={Statement} />
      <Tab.Screen name="transaçōes" component={Transitions} />
      <Tab.Screen name="serviços" component={Services} />
      <Tab.Screen name="ajuda" component={HelpScreen} />
    </Tab.Navigator>
  );
}

export default Routes;