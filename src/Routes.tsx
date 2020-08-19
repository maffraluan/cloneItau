import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, HelpScreen, Transitions, Services, Statement, } from './screens/'
import { IconMenu } from './components/IconMenu';

const Tab = createBottomTabNavigator();

interface IRouteProps {
}

const Routes: React.FunctionComponent<IRouteProps> = () => {

  const icons: {[key: string]: object | any } = {
    'inicio': {
      name: "home-outline",
      lib: 'ionicon'
    },
    'extrato': {
      name: "text",
      lib: 'material-community'
    },
    'transações': {
      name: "currency-usd-off",
      lib: 'material-community'
    },
    'serviços': {
      name: "table-account",
      lib: 'material-community'
    },
    'ajuda': {
      name: "wechat",
      lib: 'material-community'
    },
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          const { name, lib } = icons[route.name]
          
          return (
              <IconMenu 
                focused={focused}
                name={name}
                type={lib}
                color={color}
                label={route.name}
              />
            )
        }
      })}
      tabBarOptions={{
        activeTintColor: '#ec7404',
        inactiveTintColor: '#fff',
        style: {
          backgroundColor: '#ec7404',
          paddingBottom: 25,
        },
      }} >
      <Tab.Screen
        name="inicio"
        component={Home}
        options={{
          title: ''
        }} />
      <Tab.Screen
        name="extrato"
        component={Statement}
        options={{
          title: ''
        }} />

      <Tab.Screen
        name="transações"
        component={Transitions}
        options={{
          title: ''
        }} />

      <Tab.Screen
        name="serviços"
        component={Services}
        options={{
          title: ''
        }} />

      <Tab.Screen
        name="ajuda"
        component={HelpScreen}
        options={{
          title: ''
        }} />
    </Tab.Navigator>
  );
}

export default Routes;